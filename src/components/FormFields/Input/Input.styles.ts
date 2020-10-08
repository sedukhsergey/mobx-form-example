const styles = {
  default: `
    bg-white
    p-2
    focus:border-gray-300
    border-t-none
    border-l-none
    border-r-none
    border-b
    border-b-solid
    border-b-gray-500
    hover:bg-white
    hover:border-gray-400
    focus:outline-none
    focus:bg-white
    focus:shadow-outline
  `,
  upload: `
  text-xl
  absolute
  left-0;
  top-0;
  opacity-0
  p-2
  w-full
  cursor-pointer
  hover:cursor-pointer
  `,
  error: `
    border-b-1
    border-solid
    border-red-500
    hover:border-red-500
    focus:border-red-500
    focus:shadow-none
  `,
};

export default styles;
