const getStyle = ({ looks = [], styles }) => {
  // map looks to a styles[look] string
  return looks.map((look) => styles[look]).join(' ');
};

export default getStyle;
