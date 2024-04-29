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
        udp: 86.4
      },
      avgTurnCandidate: {
        udp: 135,
        tcp: 143,
        tls: 190
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
        udp: null,
        tcp: null,
        tls: null,
      },
      avgStunCandidate: {
        udp: 72.7
      },
      avgTurnCandidate: {
        udp: null,
        tcp: null,
        tls: null
      },
      maxTurnThroughput: {
        udp: null,
        tcp: null,
        tls: null
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
        udp: 48.8,
        tcp: 10.6,
        tls: 10.9
      }
    }
  },
  'metered': {
    title: 'Metered',
    description: '',
    project: false,
    data: {
      avgTurnLatency: {
        udp: 52.4,
        tcp: 44.6,
        tls: 43.6,
      },
      avgStunCandidate: {
        udp: 60.6
      },
      avgTurnCandidate: {
        udp: 173,
        tcp: 193,
        tls: 326
      },
      maxTurnThroughput: {
        udp: 46.2,
        tcp: 1.0,
        tls: 0.9
      }
    }
  },
  'expressturn': {
    title: 'ExpressTURN',
    description: '',
    project: false,
    data: {
      avgTurnLatency: {
        udp: 164.4,
        tcp: 239.0,
        tls: null,
      },
      avgStunCandidate: {
        udp: 88.4
      },
      avgTurnCandidate: {
        udp: 609,
        tcp: 628,
        tls: null
      },
      maxTurnThroughput: {
        udp: 0.1,
        tcp: 1.3,
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

export const explanations = {
  avgTurnLatency: {
    title: "Average TURN Latency",
    description: "The average time to first byte through a TURN server",
    measure: "ms"
  },
  avgStunCandidate: {
    title: "Average STUN Candidate Latency",
    description: "The average time to get a STUN candidate from the server",
    measure: "ms"
  },
  avgTurnCandidate: {
    title: "Average TURN Candidate Latency",
    description: "The average time to get a Relay candidate from the server",
    measure: "ms"
  },
  maxTurnThroughput: {
    title: "Max TURN Throughput",
    description: "The max amount of throughput through a TURN server",
    measure: "Mb/s"
  }
}

export const providers = Object.keys(providerData).map((i) => providerData[i].project === false ? providerData[i].title : undefined).filter(notUndefined => notUndefined !== undefined)
export const projects = Object.keys(providerData).map((i) => providerData[i].project === true ? providerData[i].title : undefined).filter(notUndefined => notUndefined !== undefined)

export function getProviderTitleFromId(id) {
  return providerData[id].title
}

export function getProviderBlurbFromId(id) {
  return providerData[id].description
}