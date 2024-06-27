export function onRequest(context) {
	// Initialize the default cache
	//const cache = caches.default

	// // use .match() to see if we have a cache hit, if so return the caches response early
	// let response = await cache.match(event.request)
	// if (response) {
	// 	return response
	// }

	// // we'll chain our await calls to get the JSON response in one line
	// const lokiResponse = await (
	// 	await fetch(
	// 		``
	// 	)
	// ).json()

	// response = new Response(JSON.stringify(response), {
	// 	headers: {
	// 		'Access-Control-Allow-Origin': '*',
	// 		// We set a max-age of 300 seconds which is equivalent to 5 minutes.
	// 		// If the last response is older than that the cache.match() call returns nothing and and a new response is fetched
	// 		'Cache-Control': 'max-age: 300',
	// 	},
	// })

	// // before returning the response we put a clone of our response object into the cache so it can be resolved later
	// event.waitUntil(cache.put(event.request, response.clone()))

	const providerData = {
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
		'xirsys': {
			title: 'Xirsys',
			description: '',
			project: false,
			data: {
				avgTurnLatency: {
					udp: { value: 38.1 },
					tcp: { value: 35.7 },
					tls: { value: 36.4 },
				},
				avgStunCandidate: {
					udp: { value: 61.4 },
				},
				avgTurnCandidate: {
					udp: { value: 499 },
					tcp: { value: 334 },
					tls: { value: 379 },
				},
				maxTurnThroughput: {
					udp: { value: 54.4 },
					tcp: { value: 35.5 },
					tls: { value: 35.3 },
				}
			}
		},
		'twilio': {
			title: 'Twilio',
			description: '',
			project: false,
			data: {
				avgTurnLatency: {
					udp: { value: 38.5 },
					tcp: { value: 38.6 },
					tls: { value: 37.4 },
				},
				avgStunCandidate: {
					udp: { value: 60.4 },
				},
				avgTurnCandidate: {
					udp: { value: 241 },
					tcp: { value: 244 },
					tls: { value: 364 },
				},
				maxTurnThroughput: {
					udp: { value: 54.1 },
					tcp: { value: 20.6 },
					tls: { value: 20.1 },
				}
			}
		},
		'metered': {
			title: 'Metered',
			description: '',
			project: false,
			data: {
				avgTurnLatency: {
					udp: { value: 30.2 },
					tcp: { value: 28 },
					tls: { value: 29 },
				},
				avgStunCandidate: {
					udp: { value: 65 },
				},
				avgTurnCandidate: {
					udp: { value: 187 },
					tcp: { value: 154 },
					tls: { value: 276 },
				},
				maxTurnThroughput: {
					udp: { value: 59.1 },
					tcp: { value: 1.7 },
					tls: { value: 1.6 },
				}
			}
		},
		'expressturn': {
			title: 'ExpressTURN',
			description: '',
			project: false,
			data: {
				avgTurnLatency: {
					udp: { value: 151.7 },
					tcp: { value: 151.5 },
					tls: null,
				},
				avgStunCandidate: {
					udp: { value: 80.5 },
				},
				avgTurnCandidate: {
					udp: { value: 406 },
					tcp: { value: 513 },
					tls: null,
				},
				maxTurnThroughput: {
					udp: { value: 12.5 },
					tcp: { value: 3 },
					tls: null,
				}
			}
		},
		'google': {
			title: 'Google',
			description: '',
			project: false,
			data: {
				avgStunCandidate: {
					udp: { value: 54.9 },
				},
			}
		},
		// Rel is what we used to  call elixir-webrtc. Commented out because
		// OSS projects will go in a separate section
		// 'rel': {
		// 	title: 'Rel',
		// 	description: '',
		// 	project: true,
		// 	data: {
		// 		avgTurnLatency: {
		// 			udp: { value: 46.3 },
		// 			tcp: null,
		// 			tls: null,
		// 		},
		// 		avgStunCandidate: {
		// 			udp: { value: 103.7 },
		// 		},
		// 		avgTurnCandidate: {
		// 			udp: { value: 160 },
		// 			tcp: null,
		// 			tls: null,
		// 		},
		// 		maxTurnThroughput: {
		// 			udp: { value: 47 },
		// 			tcp: null,
		// 			tls: null,
		// 		}
		// 	}
		// }
	};

	// work out best/worst provider and percentages
	const calculateBestAndWorst = () => {
		const bestAndWorst = {};
		// it will look like this
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
		const tests = [
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

		const compareFunc = {
			min: (a, b) => {
				if (!a?.value) {
					return b;
				}
				if (a.value <= b.value) {
					return a;
				}
				return b;
			},
			max: (a, b) => {
				if (!a?.value) return b;
				if (a.value >= b.value) {
					return a;
				}
				return b;
			},
		};

		tests.map(({ testName, protocols, best, worst }) => {
			protocols.map((protocol) => {
				for (const provider in providerData) {
					if (!providerData[provider].data[testName]?.[protocol]) {
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
							value: providerData[provider]?.data?.[testName]?.[protocol]?.value,
						},
					);
					bestAndWorst[testName][protocol].worst = compareFunc[worst](
						bestAndWorst[testName][protocol].worst,
						{
							name: provider,
							value: providerData[provider]?.data?.[testName]?.[protocol]?.value,
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


	const response = new Response(JSON.stringify({
		// TODO remove minsAndMaxes
		// minsAndMaxes: {
		// 	avgTurnLatency: {
		// 		udp: {min: 'cloudflare', max: 'expressturn'},
		// 		tcp: {min: 'cloudflare', max: 'expressturn'},
		// 		tls: {min: 'cloudflare', max: 'expressturn'},
		// 	},
		// 	avgStunCandidate: {
		// 		udp: {min: 'google', max: 'expressturn'}
		// 	},
		// 	avgTurnCandidate: {
		// 		udp: {min: 'cloudflare', max: 'expressturn'},
		// 		tcp: {min: 'cloudflare', max: 'expressturn'},
		// 		tls: {min: 'cloudflare', max: 'twilio'}
		// 	},
		// 	maxTurnThroughput: {
		// 		udp: {min: 'expressturn', max: 'cloudflare'},
		// 		tcp: {min: 'metered', max: 'cloudflare' },
		// 		tls: {min: 'metered', max: 'cloudflare'}
		// 	}
		// },
		bestAndWorst: calculateBestAndWorst(),
		providerData: providerData
	}), {
		headers: {
			'Access-Control-Allow-Origin': '*',
			// We set a max-age of 300 seconds which is equivalent to 5 minutes.
			// If the last response is older than that the cache.match() call returns nothing and and a new response is fetched
			'Cache-Control': 'max-age: 300',
		},
	})

	return response
}
