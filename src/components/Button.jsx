import { Link } from "react-router-dom"
import PropTypes from "prop-types"

export function Button({ to, label, icon }) {
  return (
    <Link className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-ipblue-900 text-white hover:bg-ipblue-800 disabled:opacity-50 disabled:pointer-events-none" to={to}>
      {label}
      {icon ? icon : null}
    </Link>
  )
}

Button.defaultProps = {
  icon: null,
  label: '',
  to: ''
};

Button.propTypes = {
  label: PropTypes.string,
  to: PropTypes.string,
  icon: PropTypes.node
};