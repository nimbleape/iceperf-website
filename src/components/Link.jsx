import PropTypes from 'prop-types';
import { twMerge } from 'tailwind-merge';

export const Link = ({ href = '', className = '', children = null, ...rest }) => (
  <a
    href={href}
    className={twMerge('text-ipblue-800 dark:text-ipblue-100 underline hover:opacity-80', className)}
    {...rest}
  >
    {children}
  </a>
);

Link.propTypes = {
  href: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.func,
};
