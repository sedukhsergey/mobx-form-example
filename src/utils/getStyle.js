const getStyle = ({
  looks = [], styles,
}) =>
  // map looks to a styles[look] string
  looks.map(look => styles[look]).join(' ');
export default getStyle;
