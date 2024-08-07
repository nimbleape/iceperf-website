import { twMerge } from 'tailwind-merge';
import PropTypes from 'prop-types';

const ArrowUpDown = ({ className = '' }) => (
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
    <path d='m21 16-4 4-4-4' />
    <path d='M17 20V4' />
    <path d='m3 8 4-4 4 4' />
    <path d='M7 4v16' />
  </svg>
);

export default ArrowUpDown;

ArrowUpDown.propTypes = {
  className: PropTypes.string,
};
