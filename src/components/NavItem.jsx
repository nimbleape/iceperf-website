import { Link } from "react-router-dom"
import PropTypes from "prop-types";

export function NavItem({ to, label, current }) {
  if (current) {
    return (
      <Link className="font-medium sm:py-6 text-blue-600" to={to} aria-current="page">{label}</Link>
    )
  }
  return (
    <Link className="font-medium text-gray-800 hover:text-gray-500 sm:py-6 dark:text-neutral-200 dark:hover:text-neutral-400" to={to} aria-current="page">{label}</Link>
  )
}

NavItem.defaultProps = {
  label: '',
  to: '',
  current: false
};

NavItem.propTypes = {
  label: PropTypes.string,
  to: PropTypes.string,
  current: PropTypes.bool
};