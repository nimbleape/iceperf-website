export const providersList = {
  cloudflare: {
    name: 'Cloudflare',
    description: `
Cloudflare is a global leader in internet security and performance, with over 300 points of presence worldwide. Their Calls product supports a global TURN network. Pricing for Cloudflare's TURN service is straightforward, with charges based on usage: $0.05 per real-time GB on egress only. Cloudflare Calls has a 1TB free allowance.

Cloudflare offers a TURN credential API as well as analytics on usage via their analytics graphql API.

For more details, visit Cloudflare's [TURN documentation](https://developers.cloudflare.com/calls/turn/)

We test Cloudflare's TURN service using their 1TB free allowance.`,
    isOSSProject: false,
    throughputFields: ['tcp', 'tls', 'udp'],
    features: {
      '2fa': true,
      'analysis-api': true,
      'credential-api': true,
      'shared-secret-auth': false,
      'free-tier': true,
      locations: "300+",
    }
  },
  xirsys: {
    name: 'Xirsys',
    description: `
[Xirsys](https://xirsys.com) is one of the two longest running TURN networks. They have infrastructure in 9 regions around the world.

Xirsys offer a 500 MB free tier, capped to a single region. Their plans range from $33 per month to $499 per month with overage pricing. Their overage pricing ranges from $0.50/GB to $0.09/GB.

We test Xirsys with a gisted Elite Plan.
`,
    isOSSProject: false,
    throughputFields: ['tcp', 'tls', 'udp']
  },
  twilio: {
    name: 'Twilio',
    description: `
Twilio's **Network Traversal Service (NTS)** is probably the most well known service. It's pay per GB model with no upfront monthly commitment makes it very easy to get started with. They operate in 9 regions globally.

For more information, visit Twilio's [NTS documentation](https://www.twilio.com/docs/stun-turn)

Their pricing varies depending on which location your data is relayed through. This ranges from $0.40 / GB to $0.80 / GB

We test Twilio with gifted credit.`,
    isOSSProject: false,
    throughputFields: ['tcp', 'tls', 'udp']
  },
  metered: {
    name: 'Metered',
    description: `
[Metered](https://www.metered.ca/stun-turn) are a fairly new player in this market compared to Twilio and Xirsys. They operate in 9 locations globally.

Metered offers a 500 MB free tier without overages. Their plans range from $99 per month to $499 per month with overage pricing. Their overage pricing ranges from $0.40/GB to $0.10/GB.`,
    isOSSProject: false,
    throughputFields: ['tcp', 'tls', 'udp']
  },
  expressturn: {
    name: 'ExpressTURN',
    description: `
[ExpressTURN](https://www.expressturn.com) is one of the new platforms available to users. They operate in 10 regions globally.

While their documetation suggests they offer 1TB of transfer in their free tier; our tests would stop working until ExpressTURN gifted us their Premium tier, suggesting their free tier is not 1TB.

ExpressTURN's pricing is very simple. They offer a free tier. Their Premium tier is $9 a month for 5TB of data transfer.

We test ExpressTURN with a gifted Premium tier.`,
    isOSSProject: false,
    throughputFields: ['tcp', 'udp']
  },
  google: {
    name: 'Google',
    description: `
Google's public STUN server, \`stun.l.google.com:19302\`, is one of the most widely used STUN servers in WebRTC applications. Its free, reliable nature has made it the default for many developers building WebRTC-based applications, such as video chat, real-time communication tools, and online games. However, its widespread use can create dependencies on Google's infrastructure.

And when you're not paying for a service, who do you contact when something goes wrong and the STUN server isn't available and your applications aren't working properly. While free sounds great, moving to a provider or STUN server under your control is far better.
`,
    isOSSProject: false,
    throughputFields: null
  },
  rel: {
    name: 'Rel',
    description: `
[Rel](https://github.com/elixir-webrtc/rel) is an open-source STUN and TURN server built using Elixir. It helps users with NAT traversal, enabling peer-to-peer communication. Rel focuses on scalability, performance, and ease of use, making it suitable for developers looking to self-host their own STUN/TURN infrastructure. It is customizable and designed for distributed systems, offering an alternative to proprietary services.

For more details, check the [GitHub repository](https://github.com/elixir-webrtc/rel).`,
    isOSSProject: true,
    throughputFields: ['udp']
  },
};

// export const fields = ['avgTurnLatency', 'maxTurnThroughput', 'avgTurnCandidate', 'avgStunCandidate', 'avgApiResponseTime', 'avgTurnTimeToConnectedState', 'avgStunTimeToConnectedState'];

export const explanations = {
  avgStunCandidate: {
    title: "Average STUN Candidate Latency",
    description: "The average time to get a STUN candidate from the server",
    measure: "ms",
    min: {
      field: 'minStunCandidate'
    },
    max: {
      field: 'maxStunCandidate'
    }
  },
  avgStunTimeToConnectedState: {
    title: "Average Time to Connected State (STUN)",
    description: "The average time to a connected state",
    measure: "ms",
    min: {
      field: 'minStunTimeToConnectedState'
    },
    max: {
      field: 'maxStunTimeToConnectedState'
    }
  },
  avgTurnCandidate: {
    title: "Average TURN Candidate Latency",
    description: "The average time to get a Relay candidate from the server",
    measure: "ms",
    min: {
      field: 'minTurnCandidate'
    },
    max: {
      field: 'maxTurnCandidate'
    }
  },
  avgTurnTimeToConnectedState: {
    title: "Average Time to Connected State (TURN)",
    description: "The average time to a connected state",
    measure: "ms",
    min: {
      field: 'minTurnTimeToConnectedState'
    },
    max: {
      field: 'maxTurnTimeToConnectedState'
    }
  },
  avgTurnLatency: {
    title: "Average TURN Latency",
    description: "The average time to first byte through a TURN server",
    measure: "ms",
    min: {
      field: 'minTurnLatency'
    },
    max: {
      field: 'maxTurnLatency'
    }
  },
  maxTurnThroughput: {
    title: "Max TURN Throughput",
    description: "The max amount of throughput through a TURN server",
    measure: "Mb/s"
  },
  avgApiResponseTime: {
    title: "Average API Response Time",
    description: "The average time to get a list of Ice Servers from the Provider's API",
    measure: "ms",
    min: {
      field: 'minApiResponseTime'
    },
    max: {
      field: 'maxApiResponseTime'
    }
  },
}

export const providers = Object.values(providersList)
  .map(({ name, isOSSProject }) => isOSSProject ? undefined : name)
  .filter(notUndefined => notUndefined !== undefined);
export const projects = Object.values(providersList)
  .map(({ name, isOSSProject }) => isOSSProject ? name : undefined)
  .filter(notUndefined => notUndefined !== undefined);

export function getProviderTitleFromId(id) {
  return providersList[id]?.name || '';
}

export function getProviderBlurbFromId(id) {
  return providersList[id]?.description || '';
}

// This solves the problem of Rel being called elixir in the data
export function getProviderIdFromName(n) {
  if (!n) {
    return;
  }
  const found = Object.entries(providersList).find(([id, value]) => value.name.toLocaleLowerCase() === n);
  if (found) {
    return found[0];
  }
}
