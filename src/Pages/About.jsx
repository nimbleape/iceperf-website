import { Layout } from '../layout/Layout';
import { Typography } from '../components/Typography';
import { Blocks } from '../components/Blocks';
import { Card } from '../components/Card';
import { Foo } from '../icons/Foo';
import ArrowUpDown from '../icons/ArrowUpDown';
import Cable from '../icons/Cable';
import Stopwatch from '../icons/Stopwatch';

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
      <Typography style='body'>
        Learn more on the <a className='text-ipblue-900 underline' href='https://nimblea.pe/monkey-business/2024/04/30/introducing-iceperf-com/' target='_blank'>Nimble Ape blog post</a>.
      </Typography>

      <Typography style='h3'>Description of the tests</Typography>
      <Typography style='body'>
        Each test is carried out between two clients running on the same machine, an Offerer and an Answerer. While normally an agent will gather all available ICE candidates when establishing a WebRTC connection, ICEPerf specifies the scheme, protocol and port for each test, and then runs all tests in sequence.
      </Typography>
      <Typography style='body'>
        For tests over TURN networks, only the Offerer is forced to go through TURN.
      </Typography>

      <Blocks>
        <Card
          title='Latency'
          content='Measures the time until the Answerer receives the first packet over a TURN network.'
          icon={<Stopwatch className='flex-shrink-0 size-6 text-blue-600 dark:text-blue-400' />}
        />
        <Card
          title='ICE Candidate'
          content='Determines the time taken to receive the first ICE candidate, which is crucial for establishing WebRTC connections quickly and efficiently.'
          icon={<Cable className='flex-shrink-0 size-6 text-blue-600 dark:text-blue-400' />}
        />
        <Card
          title='Throughput'
          content='Once the connection via a TURN server is established, the Offerer agent starts sending 1-MB packets to the Answerer through the data channel, as quickly as possible. The throughput is the calculated rate of packets received by the Answerer.'
          icon={<ArrowUpDown className='flex-shrink-0 size-6 text-blue-600 dark:text-blue-400' />}
        />
      </Blocks>

      <Typography style='small'>
        NOTE: Tests are completed over a home broadband connection, 1 Gbps down, 100 Mbps up, hardwired. Tests are run every hour. Average results shown on this website are 7-day averages, updated hourly. Throughput trends show the latest available measurement.
      </Typography>
    </Layout>
  )
}
