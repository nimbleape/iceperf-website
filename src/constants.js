export const providersList = {
  cloudflare: {
    name: 'Cloudflare',
    description: '',
    isOSSProject: false,
  },
  xirsys: {
    name: 'Xirsys',
    description: '',
    isOSSProject: false,
  },
  twilio: {
    name: 'Twilio',
    description: '',
    isOSSProject: false,
  },
  metered: {
    name: 'Metered',
    description: '',
    isOSSProject: false,
  },
  expressturn: {
    name: 'ExpressTURN',
    description: '',
    isOSSProject: false,
  },
  google: {
    name: 'Google',
    description: '',
    isOSSProject: false,
  },
  elixir: {
    name: 'Rel',
    description: '',
    isOSSProject: true,
  },
};

export const fields = ['avgTurnLatency', 'maxTurnThroughput', 'avgTurnCandidate', 'avgStunCandidate'];

export const explanations = {
  avgTurnLatency: {
    title: "Average TURN Latency",
    description: "The average time to first byte through a TURN server",
    measure: "ms"
  },
  maxTurnThroughput: {
    title: "Max TURN Throughput",
    description: "The max amount of throughput through a TURN server",
    measure: "Mb/s"
  },
  avgTurnCandidate: {
    title: "Average TURN Candidate Latency",
    description: "The average time to get a Relay candidate from the server",
    measure: "ms"
  },
  avgStunCandidate: {
    title: "Average STUN Candidate Latency",
    description: "The average time to get a STUN candidate from the server",
    measure: "ms"
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
