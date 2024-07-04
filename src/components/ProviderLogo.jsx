import PropTypes from 'prop-types'
import CloudflareLogo from '../assets/providers/cloudflare-official.svg?react'
import GoogleLogo from '../assets/providers/google-ar21.svg?react'
import ExpressTurnLogo from '../assets/providers/expressturn-logo21.svg?react'
import TwilioLogo from '../assets/providers/twilio-ar21.svg?react'
import IceCubeLogo from '../assets/icecube.svg?react'
import XirsysLogo from '../assets/providers/xirsys-logo.svg?react'
import MeteredLogo from '../assets/providers/metered-logo.png?react'


export function ProviderLogo({ provider, height }) {
  switch (provider) {
    case 'cloudflare':
      return <CloudflareLogo height={height} />
    case 'google':
      return <GoogleLogo height={height} />
    case 'expressturn':
      return <ExpressTurnLogo height={height} />
    case 'twilio':
      return <TwilioLogo height={height} />
    case 'xirsys':
      return <XirsysLogo height={height} />
    case 'metered':
        return <img src={MeteredLogo} style={{ height, maxHeight: '100%', maxWidth: '100%' }} />
    default:
      return <IceCubeLogo height={height} />
  }
}

ProviderLogo.defaultProps = {
  provider: ''
};

ProviderLogo.propTypes = {
  provider: PropTypes.string,
};
