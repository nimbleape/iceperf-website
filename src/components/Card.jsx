import PropTypes from "prop-types";

export function Card({title, content, icon}) {
  return (
    <div className="size-full bg-white shadow-lg rounded-lg p-5 dark:bg-neutral-900">
      <div className="flex items-center gap-x-4 mb-3">
        <div className="inline-flex justify-center items-center size-[62px] rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
          {icon ? icon : null}
        </div>
        <div className="flex-shrink-0">
          <h3 className="block text-lg font-semibold text-gray-800 dark:text-white">{title}</h3>
        </div>
      </div>
      <p className="text-gray-600 dark:text-neutral-400">{content}</p>
    </div>
  )
}

Card.defaultProps = {
  title: '',
  content: '',
  icon: null
};

Card.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  icon: PropTypes.node
};