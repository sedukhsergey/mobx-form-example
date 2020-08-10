import {
  useState, useEffect,
} from 'react';

type Props = {
    styles: any;
    looks: string;
    customClasses?: string,
};

const useStyles = ({
  styles, looks, customClasses = '',
}: Props) => {
  const [classNames, setClassNames] = useState('');
  useEffect(() => {
    if (looks.trim().length) {
      const customStyles = looks.trim().split(' ') || [];
      const classNamesList = customStyles
        .map(look => styles[look])
        .join(' ');
      setClassNames(`${classNamesList} ${customClasses}`);
    }
  }, [styles, looks, customClasses]);
  return [classNames];
};

export default useStyles;
