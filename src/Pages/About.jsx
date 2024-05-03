import { Layout } from '../layout/Layout'
import { Typography } from '../components/Typography'

export function About() {
  return (
    <Layout>
      <Typography style='h2'>About ICEPerf.com</Typography>
      <Typography style='body'>
        Which TURN servers provider should you use? The answer depends on each specific needs, the quality of the network and, most importantly, the location. To our knowledge, there is no tool out there that helps you compare how each TURN provider will perform in each scenario, so we decided to build it!
      </Typography>
      <Typography style='body'>
        ICEPerf runs a series of tests with each of the TURN providers mentioned above and exports metrics to compare the results.
      </Typography>
      <Typography style='body'>Learn more on the <a className='text-ipblue-900 underline' href='https://nimblea.pe/monkey-business/2024/04/30/introducing-iceperf-com/' target='_blank'>Nimble Ape blog post.</a></Typography>
    </Layout>
  )
}
