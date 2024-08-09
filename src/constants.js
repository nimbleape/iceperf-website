export const providersList = {
  cloudflare: {
    name: 'Cloudflare',
    description: '',
    isOSSProject: false,
    throughputFields: ['tcp', 'tls', 'udp']

  },
  xirsys: {
    name: 'Xirsys',
    description: '',
    isOSSProject: false,
    throughputFields: ['tcp', 'tls', 'udp']
  },
  twilio: {
    name: 'Twilio',
    description: '',
    isOSSProject: false,
    throughputFields: ['tcp', 'tls', 'udp']
  },
  metered: {
    name: 'Metered',
    description: '',
    isOSSProject: false,
    throughputFields: ['tcp', 'tls', 'udp']
  },
  expressturn: {
    name: 'ExpressTURN',
    description: '',
    isOSSProject: false,
    throughputFields: ['tcp', 'udp']
  },
  google: {
    name: 'Google',
    description: '',
    isOSSProject: false,
    throughputFields: null
  },
  rel: {
    name: 'Rel',
    description: '',
    isOSSProject: true,
    throughputFields: ['udp']
  },
};

export const fields = ['avgTurnLatency', 'maxTurnThroughput', 'avgTurnCandidate', 'avgStunCandidate', 'avgApiResponseTime'];

export const explanations = {
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
