import { twMerge } from 'tailwind-merge';
import PropTypes from 'prop-types';

const Stopwatch = ({ className = '' }) => (
  <svg
    className={twMerge('inline-block size-4 self-center', className)}
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <line x1='10' x2='14' y1='2' y2='2' />
    <line x1='12' x2='15' y1='14' y2='11' />
    <circle cx='12' cy='14' r='8' />
  </svg>
);

export default Stopwatch;

Stopwatch.propTypes = {
  className: PropTypes.string,
};
