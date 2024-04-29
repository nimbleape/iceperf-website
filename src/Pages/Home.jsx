import { Blocks } from "../components/Blocks"
import { Hero } from "../components/Hero"
import { Card } from "../components/Card"
import { Foo } from "../icons/Foo"

export function Home() {
  return (
    <main id="content">
      <Hero />
      <Blocks>
        <Card title="Latency" content="Time to first byte." icon={Foo} />
        <Card title="Ice Candidate" content="Time to recieve an Ice Candidate" icon={Foo} />
        <Card title="Throughput" content="Rate of data send" icon={Foo} />
      </Blocks>
    </main>
  )
}