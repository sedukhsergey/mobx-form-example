import { useContext } from 'react';
import { __RouterContext as RouterContext } from 'react-router';


type Locale = {
  locale: string,
}

type Match = {
  isExact: boolean,
  params: Locale
  path: string,
  url: string,
}

const useMatch = (): Match | any => {
  const { match } = useContext(RouterContext);
  return match;
};

export default useMatch;
