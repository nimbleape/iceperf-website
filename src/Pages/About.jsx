import { Layout } from '../layout/Layout'
import { Typography } from '../components/Typography'
import { Blocks } from "../components/Blocks"
import { Card } from "../components/Card"
import { Foo } from "../icons/Foo"

export function About() {
  return (
    <Layout>
      <Typography style='h2'>About ICEPerf.com</Typography>
      <Typography style='body'>
        Which TURN server provider should you use? The answer depends on the specific needs of the users and applications using them, the quality of the network and, most importantly, the location. To our knowledge, there is no tool out there that helps you compare how each TURN provider will perform in each scenario, so we decided to build it!
      </Typography>
      <Typography style='body'>
        ICEPerf runs a series of tests with each of the TURN providers mentioned above and exports metrics to compare the results.
      </Typography>
      <Typography style='body'>Learn more on the <a className='text-ipblue-900 underline' href='https://nimblea.pe/monkey-business/2024/04/30/introducing-iceperf-com/' target='_blank'>Nimble Ape blog post.</a></Typography>

      <Blocks>
        <Card title="Latency" content="Time to first byte." icon={Foo} />
        <Card title="Ice Candidate" content="Time to recieve an Ice Candidate" icon={Foo} />
        <Card title="Throughput" content="Rate of data send" icon={Foo} />
      </Blocks>
    </Layout>
  )
}
