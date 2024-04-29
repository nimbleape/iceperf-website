import PropTypes from 'prop-types'
import Logo from '../assets/provider.svg?react'

export function ProviderLogo({ provider }) {
  return <Logo />
}

ProviderLogo.defaultProps = {
  provider: ''
};

ProviderLogo.propTypes = {
  provider: PropTypes.string,
};