import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';
import { Link as RouterLink } from '@tanstack/react-router'

import { isExternalLink } from '../util/isExternalLink';

export const Link = ({ to = '', className = '', children = null, ...rest }) => {
  const mergedClassName = twMerge('text-ipblue-800 dark:text-ipblue-100 underline hover:opacity-80', className);

  if (isExternalLink(to)) {
    return (
      <a href={to} className={mergedClassName} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <RouterLink to={to} className={mergedClassName} {...rest}>
      {children}
    </RouterLink>
  );
};

Link.propTypes = {
  to: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};
