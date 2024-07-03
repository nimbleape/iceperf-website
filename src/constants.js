export const providerData = {
  'cloudflare': {
    title: 'Cloudflare',
    description: '',
    project: false,
    data: {
      avgTurnLatency: {
        udp: 24.6,
        tcp: 24.7,
        tls: 23.2,
      },
      avgStunCandidate: {
        udp: 71.8
      },
      avgTurnCandidate: {
        udp: 97.1,
        tcp: 150,
        tls: 200
      },
      maxTurnThroughput: {
        udp: 60.2,
        tcp: 61.6,
        tls: 70.7
      }
    }
  },
  'xirsys': {
    title: 'Xirsys',
    description: '',
    project: false,
    data: {
      avgTurnLatency: {
        udp: 38.1,
        tcp: 35.7,
        tls: 36.4,
      },
      avgStunCandidate: {
        udp: 61.4
      },
      avgTurnCandidate: {
        udp: 499,
        tcp: 334,
        tls: 379
      },
      maxTurnThroughput: {
        udp: 54.4,
        tcp: 35.5,
        tls: 35.3
      }
    }
  },
  'twilio': {
    title: 'Twilio',
    description: '',
    project: false,
    data: {
      avgTurnLatency: {
        udp: 38.5,
        tcp: 38.6,
        tls: 37.4,
      },
      avgStunCandidate: {
        udp: 60.4,
      },
      avgTurnCandidate: {
        udp: 241,
        tcp: 244,
        tls: 364
      },
      maxTurnThroughput: {
        udp: 54.1,
        tcp: 20.6,
        tls: 20.1
      }
    }
  },
  'metered': {
    title: 'Metered',
    description: '',
    project: false,
    data: {
      avgTurnLatency: {
        udp: 30.2,
        tcp: 28,
        tls: 29,
      },
      avgStunCandidate: {
        udp: 65
      },
      avgTurnCandidate: {
        udp: 187,
        tcp: 154,
        tls: 276
      },
      maxTurnThroughput: {
        udp: 59.1,
        tcp: 1.7,
        tls: 1.6
      }
    }
  },
  'expressturn': {
    title: 'ExpressTURN',
    description: '',
    project: false,
    data: {
      avgTurnLatency: {
        udp: 151.7,
        tcp: 151.5,
        tls: null,
      },
      avgStunCandidate: {
        udp: 80.5
      },
      avgTurnCandidate: {
        udp: 406,
        tcp: 513,
        tls: null
      },
      maxTurnThroughput: {
        udp: 12.5,
        tcp: 3,
        tls: null
      }
    }
  },
  'google': {
    title: 'Google',
    description: '',
    project: false,
    data: {
      avgStunCandidate: {
        udp: 54.9
      },
    }
  },
  'elixr-webrtc': {
    title: 'Elixr-WebRTC',
    description: '',
    project: true,
    data: {
      avgTurnLatency: {
        udp:46.3,
        tcp: null,
        tls: null,
      },
      avgStunCandidate: {
        udp: 103.7
      },
      avgTurnCandidate: {
        udp: 160,
        tcp: null,
        tls: null
      },
      maxTurnThroughput: {
        udp: 47,
        tcp: null,
        tls: null
      }
    }
  }
}

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

export const providers = Object.keys(providerData).map((i) => providerData[i].project === false ? providerData[i].title : undefined).filter(notUndefined => notUndefined !== undefined)
export const projects = Object.keys(providerData).map((i) => providerData[i].project === true ? providerData[i].title : undefined).filter(notUndefined => notUndefined !== undefined)

export function getProviderTitleFromId(id) {
  return providerData[id].title
}

export function getProviderBlurbFromId(id) {
  return providerData[id].description
}
