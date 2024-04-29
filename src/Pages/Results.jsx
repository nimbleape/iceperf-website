import { TableCard } from "../components/TableCard"

export function Results() {
  return (
    <>
      <TableCard title="Latency" description="Time to first Byte Through a TURN server" field="avgTurnLatency" />
      <TableCard title="Throughput" description="Throughput through a TURN server" field="maxTurnThroughput" />
      <TableCard title="Ice Candidate Relay Response Time" description="How quickly we get a candidate returned" field="avgTurnCandidate"/>
      <TableCard title="Ice Candidate STUN Response Time" description="How quickly we get a candidate returned" field="avgStunCandidate"/>
    </>
  )
}