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
			data: {
				avgTurnLatency: {
					udp: 24.6,
					tcp: 24.7,
					tls: 23.2,
				},
				avgStunCandidate: {
					udp: 86.4
				},
				avgTurnCandidate: {
					udp: 135,
					tcp: 143,
					tls: 190
				},
				maxTurnThroughput: {
					udp: 60.2,
					tcp: 61.6,
					tls: 70.7
				}
			}
		},
		'xirsys': {
			data: {
				avgTurnLatency: {
					udp: null,
					tcp: null,
					tls: null,
				},
				avgStunCandidate: {
					udp: 72.7
				},
				avgTurnCandidate: {
					udp: null,
					tcp: null,
					tls: null
				},
				maxTurnThroughput: {
					udp: null,
					tcp: null,
					tls: null
				}
			}
		},
		'twilio': {
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
					udp: 48.8,
					tcp: 10.6,
					tls: 10.9
				}
			}
		},
		'metered': {
			data: {
				avgTurnLatency: {
					udp: 52.4,
					tcp: 44.6,
					tls: 43.6,
				},
				avgStunCandidate: {
					udp: 60.6
				},
				avgTurnCandidate: {
					udp: 173,
					tcp: 193,
					tls: 326
				},
				maxTurnThroughput: {
					udp: 46.2,
					tcp: 1.0,
					tls: 0.9
				}
			}
		},
		'expressturn': {
			data: {
				avgTurnLatency: {
					udp: 164.4,
					tcp: 239.0,
					tls: null,
				},
				avgStunCandidate: {
					udp: 88.4
				},
				avgTurnCandidate: {
					udp: 609,
					tcp: 628,
					tls: null
				},
				maxTurnThroughput: {
					udp: 0.1,
					tcp: 1.3,
					tls: null
				}
			}
		},
		'google': {
			data: {
				avgStunCandidate: {
					udp: 54.9
				},
			}
		},
		'elixr-webrtc': {
			data: {
				avgTurnLatency: {
					udp:46.3,
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
	}

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