import { providersList } from './providersList';

const icePerfTests = [
  {
    testName: 'avgTurnLatency',
    protocols: ['udp', 'tcp', 'tls'],
    best: 'min', // define what best value means
    worst: 'max', // define what worst value means
  },
  {
    testName: 'avgTurnCandidate',
    protocols: ['udp', 'tcp', 'tls'],
    best: 'min',
    worst: 'max',
  },
  {
    testName: 'avgStunCandidate',
    protocols: ['udp'],
    best: 'min',
    worst: 'max',
  },
  {
    testName: 'maxTurnThroughput',
    protocols: ['udp', 'tcp', 'tls'],
    best: 'max',
    worst: 'min',
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
  const refactored = {};
  const providers = Array.from(Object.keys(inputData));

  providers.map((provider) => {
    const providerData = inputData[provider];
    const { title, description, isProject } = providersList[provider];
    const data = {};
    icePerfTests.map(({ testName, protocols }) => {
      data[testName] = {};
      protocols.map((p) => {
        data[testName][p] = { value: null };
      });
    });
    const providerDataArr = Array.from(Object.values(providerData));
    const stunUdp = providerDataArr.find(({ scheme, protocol }) => scheme === 'stun' && protocol === 'udp');
    const turnUdp = providerDataArr.find(({ scheme, protocol }) => scheme === 'turn' && protocol === 'udp');
    const turnTcp = providerDataArr.find(({ scheme, protocol }) => scheme === 'turn' && protocol === 'tcp');
    const turnTls = providerDataArr.find(({ scheme, protocol }) => scheme === 'turns' && protocol === 'tcp');
    data.avgStunCandidate.udp.value = stunUdp?.offererTimeToReceiveCandidate;
    data.avgTurnCandidate.udp.value = turnUdp?.offererTimeToReceiveCandidate;
    data.avgTurnCandidate.tcp.value = turnTcp?.offererTimeToReceiveCandidate;
    data.avgTurnCandidate.tls.value = turnTls?.offererTimeToReceiveCandidate;
    data.avgTurnLatency.udp.value = turnUdp?.latencyFirstPacket;
    data.avgTurnLatency.tcp.value = turnTcp?.latencyFirstPacket;
    data.avgTurnLatency.tls.value = turnTls?.latencyFirstPacket;

    refactored[provider] = {
      title,
      description,
      isProject,
      data,
    };
  });

  return refactored;
};
