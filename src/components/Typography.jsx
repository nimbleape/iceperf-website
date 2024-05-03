// eslint-disable-next-line react/prop-types
export const Typography = ({ style, children }) => {
  switch (style) {
    case 'body':
      return <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400">{children}</p>;
    case 'h1':
      return <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">{children}</h1>;
    case 'h2':
      return <h2 className="text-3xl text-gray-800 font-bold lg:text-4xl dark:text-white">{children}</h2>
  }
};
