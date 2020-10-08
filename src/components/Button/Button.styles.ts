const styles = {
  default: `
  bg-gray-900
  p-2
  w-full
  text-white
  transition-colors
  duration-200
  active:outline-shadow
  hover:bg-gray-700
  disabled:bg-gray-300
  disabled:text-gray-900
  disabled:border-2
  disabled:border-solid
  disabled:border-gray-900
  disabled:cursor-default
  `,
  loading: `
   cursor-wait
  `,
  primary: `
  bg-blue-600
  p-2
  w-full
  text-white
  transition-colors
  duration-200
  active:outline-shadow
  hover:bg-blue-700
  disabled:bg-gray-300
  disabled:text-white-900
  disabled:border-2
  disabled:border-solid
  disabled:border-gray-300
  disabled:cursor-default
  `,
  secondary: `
  bg-red-400
  p-2
  w-full
  rounded
  text-white
  transition-colors
  duration-200
  active:outline-shadow
  hover:bg-red-500
  disabled:bg-gray-300
  disabled:cursor-default
  `,
};

export default styles;
