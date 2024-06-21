import { useEffect, useState } from 'react';
import { TableCard } from '../components/TableCard';
import { Layout } from '../layout/Layout';
import { explanations, fields } from "../constants"

export function Results() {
  const [providerData, setProviderData] = useState();

  useEffect(() => {
    const getPosts = async () => {
      const resp = await fetch('/api/posts');
      const postsResp = await resp.json();
      // rearrange data this way:
      /*
        {
          avgTurnLatency: {
            cloudflare: {
              udp: 38.1,
              tcp: 35.7,
              tls: 36.4,
            },
            twilio: { ... },
          },
          maxTurnThroughput: {
            cloudflare: {
              udp: 54.4,
              tcp: 35.5,
              tls: 35.3
            },
            twilio: { ... },
          },
          ...
        }
      */
      if (!postsResp?.providerData) {
        return;
      }

      console.log('got data', postsResp);

      const providerResults = {};
      fields.forEach((field) => {
        providerResults[field] = {};
        Object.keys(postsResp.providerData).forEach((provider) => {
          providerResults[field][provider] = postsResp.providerData[provider].data[field];
        });
      });
      setProviderData(providerResults);
    };

    getPosts();
  }, []);

  console.log(providerData);

  if (!providerData) {
    return <></>;
  }

  return (
    <Layout>
      {fields.map((field) => {
        const metric = explanations[field];
        return (
        <TableCard
          key={field}
          title={metric.title}
          description={metric.description}
          field={field}
          providerData={providerData[field]}
        />
      )})}
    </Layout>
  );
}
