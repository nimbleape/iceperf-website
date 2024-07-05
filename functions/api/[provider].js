import { calculateBestAndWorst, refactorData, refactorThroughput } from './util';

export async function onRequest(context) {

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

  const providerData_kv = await context.env['iceperf-cache'].get('7-day-average');
	const day30data = await context.env['iceperf-cache'].get(`7-day-${context.params.provider}`);

	const refactoredData = refactorData(JSON.parse(providerData_kv)); // TODO can probably only refactor this provider
	const refactored30DayData = refactorThroughput(JSON.parse(day30data));

	const response = new Response(JSON.stringify({
		bestAndWorstProvider: calculateBestAndWorst(refactoredData.commercial),
		bestAndWorstOSS: calculateBestAndWorst(refactoredData.oss),
		providerData: refactoredData.commercial,
		ossData: refactoredData.oss,
    day30data: refactored30DayData,
	}), {
		headers: {
			// We set a max-age of 300 seconds which is equivalent to 5 minutes.
			// If the last response is older than that the cache.match() call returns nothing and and a new response is fetched
			'Cache-Control': 'max-age: 300',
		},
	})

	return response
}
