import PropTypes from 'prop-types'
import CloudflareLogo from '../assets/providers/cloudflare-official.svg?react'
import GoogleLogo from '../assets/providers/google-ar21.svg?react'
import ExpressTurnLogo from '../assets/providers/expressturn-logo21.svg?react'
import TwilioLogo from '../assets/providers/twilio-ar21.svg?react'
import IceCubeLogo from '../assets/icecube.svg?react'
import XirsysLogo from '../assets/providers/xirsys-logo.svg?react'

export function ProviderLogo({ provider }) {
  switch (provider) {
    case 'cloudflare':
      return <CloudflareLogo height="66px" />
    case 'google':
      return <GoogleLogo height="66px" />
    case 'expressturn':
      return <ExpressTurnLogo height="66px" />
    case 'twilio':
      return <TwilioLogo height="66px" />
    case 'xirsys':
      return <XirsysLogo height="66px" />
    default:
      return <IceCubeLogo height="66px" />
  }
}

ProviderLogo.defaultProps = {
  provider: ''
};

ProviderLogo.propTypes = {
  provider: PropTypes.string,
};
