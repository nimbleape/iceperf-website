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
					udp: 24.6,
					tcp: 24.7,
					tls: 23.2,
				},
				avgStunCandidate: {
					udp: 71.8
				},
				avgTurnCandidate: {
					udp: 97.1,
					tcp: 150,
					tls: 200
				},
				maxTurnThroughput: {
					udp: 60.2,
					tcp: 61.6,
					tls: 70.7
				}
			}
		},
		'xirsys': {
			title: 'Xirsys',
			description: '',
			project: false,
			data: {
				avgTurnLatency: {
					udp: 38.1,
					tcp: 35.7,
					tls: 36.4,
				},
				avgStunCandidate: {
					udp: 61.4
				},
				avgTurnCandidate: {
					udp: 499,
					tcp: 334,
					tls: 379
				},
				maxTurnThroughput: {
					udp: 54.4,
					tcp: 35.5,
					tls: 35.3
				}
			}
		},
		'twilio': {
			title: 'Twilio',
			description: '',
			project: false,
			data: {
				avgTurnLatency: {
					udp: 38.5,
					tcp: 38.6,
					tls: 37.4,
				},
				avgStunCandidate: {
					udp: 60.4,
				},
				avgTurnCandidate: {
					udp: 241,
					tcp: 244,
					tls: 364
				},
				maxTurnThroughput: {
					udp: 54.1,
					tcp: 20.6,
					tls: 20.1
				}
			}
		},
		'metered': {
			title: 'Metered',
			description: '',
			project: false,
			data: {
				avgTurnLatency: {
					udp: 30.2,
					tcp: 28,
					tls: 29,
				},
				avgStunCandidate: {
					udp: 65
				},
				avgTurnCandidate: {
					udp: 187,
					tcp: 154,
					tls: 276
				},
				maxTurnThroughput: {
					udp: 59.1,
					tcp: 1.7,
					tls: 1.6
				}
			}
		},
		'expressturn': {
			title: 'ExpressTURN',
			description: '',
			project: false,
			data: {
				avgTurnLatency: {
					udp: 151.7,
					tcp: 151.5,
					tls: null,
				},
				avgStunCandidate: {
					udp: 80.5
				},
				avgTurnCandidate: {
					udp: 406,
					tcp: 513,
					tls: null
				},
				maxTurnThroughput: {
					udp: 12.5,
					tcp: 3,
					tls: null
				}
			}
		},
		'google': {
			title: 'Google',
			description: '',
			project: false,
			data: {
				avgStunCandidate: {
					udp: 54.9
				},
			}
		},
		'elixr-webrtc': {
			title: 'Elixr-WebRTC',
			description: '',
			project: true,
			data: {
				avgTurnLatency: {
					udp: 46.3,
					tcp: null,
					tls: null,
				},
				avgStunCandidate: {
					udp: 103.7
				},
				avgTurnCandidate: {
					udp: 160,
					tcp: null,
					tls: null
				},
				maxTurnThroughput: {
					udp: 47,
					tcp: null,
					tls: null
				}
			}
		}
	};

	// work out best/worst provider and percentages
	const calculateBestAndWorst = () => {
		const bestAndWorst = {};
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
							value: providerData[provider].data[testName][protocol],
						},
					);
					bestAndWorst[testName][protocol].worst = compareFunc[worst](
						bestAndWorst[testName][protocol].worst,
						{
							name: provider,
							value: providerData[provider]?.data?.[testName]?.[protocol],
						},
					);
				}
			})
		});

		return bestAndWorst;
	};


	const response = new Response(JSON.stringify({
		minsAndMaxes: {
			avgTurnLatency: {
				udp: {min: 'cloudflare', max: 'expressturn'},
				tcp: {min: 'cloudflare', max: 'expressturn'},
				tls: {min: 'cloudflare', max: 'expressturn'},
			},
			avgStunCandidate: {
				udp: {min: 'google', max: 'expressturn'}
			},
			avgTurnCandidate: {
				udp: {min: 'cloudflare', max: 'expressturn'},
				tcp: {min: 'cloudflare', max: 'expressturn'},
				tls: {min: 'cloudflare', max: 'twilio'}
			},
			maxTurnThroughput: {
				udp: {min: 'expressturn', max: 'cloudflare'},
				tcp: {min: 'metered', max: 'cloudflare' },
				tls: {min: 'metered', max: 'cloudflare'}
			}
		},
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
