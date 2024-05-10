import { useEffect, useState } from 'react';
import { TableCard } from "../components/TableCard"
import { Layout } from '../layout/Layout'

export function Results() {
  const [providerData, setProviderData] = useState();

  useEffect(() => {
    const getPosts = async () => {
      const resp = await fetch('/api/posts');
      const postsResp = await resp.json();
      setProviderData(postsResp?.providerData);
    };

    getPosts();
  }, []);

  console.log(providerData);

  if (!providerData) {
    return <></>;
  }

  return (
    <Layout>
      <TableCard title="Latency" description="Time to first Byte Through a TURN server" field="avgTurnLatency" />
      <TableCard title="Throughput" description="Throughput through a TURN server" field="maxTurnThroughput" />
      <TableCard title="Ice Candidate Relay Response Time" description="How quickly we get a candidate returned" field="avgTurnCandidate"/>
      <TableCard title="Ice Candidate STUN Response Time" description="How quickly we get a candidate returned" field="avgStunCandidate"/>
    </Layout>
  )
}
