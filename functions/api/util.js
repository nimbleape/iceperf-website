import { providersList } from '../../src/constants';

const icePerfTests = [
  {
    testName: 'avgTurnLatency',
    rawDataName: 'latencyFirstPacket', // map the test name to the name in the raw data
    scheme: 'turn',
    protocols: ['udp', 'tcp', 'tls'],
    best: 'min', // define what best value means
    worst: 'max', // define what worst value means
  },
  {
    testName: 'avgTurnCandidate',
    rawDataName: 'offererTimeToReceiveCandidate',
    scheme: 'turn',
    protocols: ['udp', 'tcp', 'tls'],
    best: 'min',
    worst: 'max',
  },
  {
    testName: 'avgStunCandidate',
    rawDataName: 'offererTimeToReceiveCandidate',
    scheme: 'stun',
    protocols: ['udp'],
    best: 'min',
    worst: 'max',
  },
  {
    testName: 'maxTurnThroughput',
    rawDataName: 'maxTurnThroughput',
    scheme: 'turn',
    protocols: ['udp', 'tcp', 'tls'],
    best: 'max',
    worst: 'min',
  },
  {
    testName: 'throughput',
    rawDataName: 'throughput',
    scheme: 'turn',
    protocols: ['udp', 'tcp', 'tls'],
  },
];

// Work out best/worst provider and percentages
// The result will look like this:
// bestAndWorst = {
// 	avgTurnLatency: {
// 		udp: {
// 			best: {
// 				name: 'cloudflare',
// 				value: 123,
// 			},
// 			worst: {...},
// 		},
// 		tcp: {...},
// 		tls: {...},
// 	},
// }
export const calculateBestAndWorst = (providerData) => {
  const bestAndWorst = {};

  const compareFunc = {
    min: (a, b) => {
      if (!a?.value) return b;
      if (!b?.value || a.value <= b.value) {
        return a;
      }
      return b;
    },
    max: (a, b) => {
      if (!a?.value) return b;
      if (!b?.value || a.value >= b.value) {
        return a;
      }
      return b;
    },
  };

  icePerfTests.map(({ testName, protocols, best, worst }) => {
    protocols.map((protocol) => {
      for (const provider in providerData) {
        if (!providerData[provider].data[testName]?.[protocol]?.value) {
          continue;
        }

        if (!bestAndWorst[testName]) {
          bestAndWorst[testName] = {};
        }
        if (!bestAndWorst[testName][protocol]) {
          bestAndWorst[testName][protocol] = {};
        }
        bestAndWorst[testName][protocol].best = compareFunc[best](
          bestAndWorst[testName][protocol].best,
          {
            name: provider,
            value: providerData[provider].data[testName][protocol].value,
          },
        );
        bestAndWorst[testName][protocol].worst = compareFunc[worst](
          bestAndWorst[testName][protocol].worst,
          {
            name: provider,
            value: providerData[provider].data[testName][protocol].value,
          },
        );
      }
    })
  });

  // calculate percentages off the best
  Array.from(Object.values(providerData)).map(({ data }) => {
    Array.from(Object.entries(data)).map(([testName, results]) => {
      const protocols = Array.from(Object.keys(results));
      protocols.map((protocol) => {
        if (!results[protocol]?.value) {
          return;
        }
        const { value: benchmark } = bestAndWorst[testName][protocol].best;
        results[protocol].offsetFromBestPercent = (results[protocol].value - benchmark) / benchmark * 100;
      });
    });
  });

  return bestAndWorst;
};

// Rearrange incoming data in the shape that the worker and the Front End expect.
// For an example of incoming data, see exampleData.js.
/**
 * Example output:
 * const providerData = {
		'cloudflare': {
			title: 'Cloudflare',
			description: '',
			project: false,
			data: {
				avgTurnLatency: {
					udp: { value: 24.6 },
					tcp: { value: 24.7 },
					tls: { value: 23.2 },
				},
				avgStunCandidate: {
					udp: { value: 71.8 },
				},
				avgTurnCandidate: {
					udp: { value: 97.1 },
					tcp: { value: 150 },
					tls: { value: 200 },
				},
				maxTurnThroughput: {
					udp: { value: 60.2 },
					tcp: { value: 61.6 },
					tls: { value: 70.7 },
				}
			}
		},
 * }
 */
export const refactorData = (inputData) => {
  const refactored = { commercial: {}, oss: {} };
  const providers = Array.from(Object.keys(inputData));

  providers.map((provider) => {
    const providerDataArr = Array.from(Object.values(inputData[provider]));
    const providerData = { stun: {}, turn: {}};
    providerData.stun.udp = providerDataArr.find(({ scheme, protocol }) => scheme === 'stun' && protocol === 'udp');
    providerData.turn.udp = providerDataArr.find(({ scheme, protocol }) => scheme === 'turn' && protocol === 'udp');
    providerData.turn.tcp = providerDataArr.find(({ scheme, protocol }) => scheme === 'turn' && protocol === 'tcp');
    providerData.turn.tls = providerDataArr.find(({ scheme, protocol }) => scheme === 'turns' && protocol === 'tcp');

    const data = {};
    icePerfTests.map(({ testName, scheme, protocols, rawDataName }) => {
      data[testName] = {};
      protocols.map((p) => {
        data[testName][p] = {
          value: providerData[scheme]?.[p]?.[rawDataName],
        };
      });
    });

    const { name, description, isOSSProject } = providersList[provider];
    refactored[isOSSProject ? 'oss' : 'commercial'][provider] = {
      name,
      description,
      isOSSProject,
      data,
    };
  });

  return refactored;
};

/**
 *
 * @param {*} inputData Trends from one provider
 *
 * For each schema/protocol, take the non-empty data.
 * Return object with the usual [test].[protocol] format
 * with separate arrays for X and Y axis,
 * and a Data array that contains [x, y] tuples.
 *
 * There is no throughput for STUN.
 */
export const refactorTrendsData = (inputData) => {
  const result = {};
  if (inputData) {
    // Object.keys(inputData).forEach((testKey) => {
      icePerfTests.map(({ testName, rawDataName, scheme, protocols }) => {
        if (rawDataName !== "throughput") {
          result[testName] = {};
        }
        protocols.forEach((protocol) => {
          let label = `${protocol === 'tls' ? 'tcp' : protocol } - ${protocol === 'tls' ? scheme + 's' : scheme}`;
          if (!inputData[rawDataName]?.[label]) return;

          if (rawDataName !== "throughput") {
            if (!result[testName][protocol]) {
              result[testName][protocol] = {}
            }
          }

          Object.keys(inputData[rawDataName][label]).forEach((date, i) => {
            if (inputData[rawDataName][label][date]) {
              // const dateMeasurement = inputData[rawDataName][label][date];
              // if (Object.prototype.isPrototypeOf.call(Object.prototype, dateMeasurement)) {
              if (rawDataName === "throughput") {

                if (!result[testName]) {
                  // console.log('created')
                  result[testName] = []
                }

                if (!result[testName][i]) {
                  result[testName].push({
                    date: date,
                    xAxis: Object.keys(inputData[rawDataName][label][date]).map((s) => Number(s))
                  })
                }

                // console.log('test!', result[testName], i)

                // console.log('test:', testName, 'date:', date, 'label:', label, 'data:', inputData[rawDataName][label][date])

                result[testName][i][protocol] = Object.values(inputData[rawDataName][label][date])
                // const throughputResult = {
                //   x: ,
                //   y: ,
                //   data: Object.entries(inputData[rawDataName][label][date]).map(([t, val]) => [Number(t), val])
                // };
              } else {
                result[testName][protocol]= {
                  x: Object.keys(inputData[rawDataName][label]),
                  y: Object.values(inputData[rawDataName][label]),
                  // data: Object.entries(inputData[rawDataName][label]).map(([t, val]) => [t, val])
                };
              }
            }
          })
        });
    })
  }


  // FIXME add this back in
  // Align all results on the same X axis (the longer one) and fill in shorter Y arrays with `null`.
  // result.protocol.x and result.protocol.data retain the original data.
  // Object.keys(result).forEach((testKey) => {
  //   let xAxis = [];
  //   Object.values(result[testKey]).forEach((protocol) => {
  //     if (protocol.x?.length > xAxis.length) {
  //       xAxis = protocol.x;
  //     }
  //   })
  //   result[testKey].xAxis = xAxis;

  //   ['udp', 'tcp', 'tls'].map((protocol) => {
  //     const { y } = result[testKey][protocol];
  //     if (!y) return;
  //     if (y.length < result[testKey].xAxis.length) {
  //       const padLen = result[testKey].xAxis.length - y.length;
  //       for (let i = 0; i < padLen; i++) {
  //         y.push(null);
  //       }
  //     }
  //   })
  // })

  return result;
};
