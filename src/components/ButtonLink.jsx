import { Link as RouterLink } from '@tanstack/react-router'
import PropTypes from 'prop-types'
import { twMerge } from 'tailwind-merge';

import { isExternalLink } from '../util/isExternalLink';

export function ButtonLink({ to = '', label = '', className = '', icon = null, disabled = false }) {
  const mergedClassName = twMerge(`py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-ipblue-900 text-white hover:bg-ipblue-800 ${disabled && 'opacity-50 pointer-events-none'}`, className);

  if (isExternalLink(to)) {
    return (
      <a className={mergedClassName} href={to}>
        {label}
        {icon ? icon : null}
      </a>
    )
  }

  return (
    <RouterLink className={mergedClassName} to={to}>
      {label}
      {icon ? icon : null}
    </RouterLink>
  )
}

ButtonLink.propTypes = {
  to: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.node,
  disabled: PropTypes.bool,
};
