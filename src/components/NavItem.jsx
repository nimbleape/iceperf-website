import { Link } from '@tanstack/react-router'
import PropTypes from 'prop-types';

export function NavItem({ to = '', label = '', current = false }) {
  if (current) {
    return (
      <Link className='' to={to} aria-current='page'>{label}</Link>
    )
  }
  return (
    <Link
      activeProps={{ className: 'font-medium sm:py-6 text-ipblue-800' }}
      inactiveProps={{ className: 'font-medium text-gray-800 hover:text-gray-500 sm:py-6 dark:text-neutral-200 dark:hover:text-neutral-400' }}
      to={to}
      aria-current='page'
    >
      {label}
    </Link>
  )
}

NavItem.propTypes = {
  label: PropTypes.string,
  to: PropTypes.string,
  current: PropTypes.bool
};
