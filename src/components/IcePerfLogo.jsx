import PropTypes from "prop-types";
import Logo from '../assets/iceperfLogo.svg?react'
import LogoWithoutWords from '../assets/iceperfLogoWithoutWords.svg?react'
import LogoSide from '../assets/iceperfLogoSide.svg?react'

export function IcePerfLogo({kind = ''}) {

  if (kind == "side") {
    return (<LogoSide />)
  }

  if (kind == "without") {
    return (<LogoWithoutWords />)
  }
  return <Logo />
}

IcePerfLogo.propTypes = {
  kind: PropTypes.string,
};