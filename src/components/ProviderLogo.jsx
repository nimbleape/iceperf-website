import PropTypes from 'prop-types'
import CloudflareLogo from '../assets/providers/cloudflare-official.svg?react'
import GoogleLogo from '../assets/providers/google-ar21.svg?react'
import ExpressTurnLogo from '../assets/providers/expressturn.png?react'
import TwilioLogo from '../assets/providers/twilio-ar21.svg?react'
import IceCubeLogo from '../assets/icecube.svg?react'


export function ProviderLogo({ provider }) {
  switch (provider) {
    case 'cloudflare':
      return <CloudflareLogo />
    case 'google':
      return <GoogleLogo />
    case 'expressturn':
      return <img src={ExpressTurnLogo} />
    case 'twilio':
      return <TwilioLogo />
    default:
      return <IceCubeLogo />
  }
}

ProviderLogo.defaultProps = {
  provider: ''
};

ProviderLogo.propTypes = {
  provider: PropTypes.string,
};