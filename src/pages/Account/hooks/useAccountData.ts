import {
  useState, useEffect,
} from 'react';

import { useStore } from 'hooks/useStore';

type AccountData = {
  name: string,
  value: string,
}

const useAccountData = () => {
  const {
    accountStore: {
      localAccount: {
        accountData: {
          getAccountSettingsSession,
          sessionData,
        },
      },
    },
  } = useStore();

  const [data, setData] = useState<AccountData>({
    name: '',
    value: '',
  });

  useEffect(() => {
    getAccountSettingsSession();
  }, [getAccountSettingsSession]);

  useEffect(() => {
    if (sessionData) {
      const { name } = sessionData;
      setData(state => ({
        ...state, name,
      }));
    }
  }, [sessionData]);

  return [data, setData] as const;
};

export default useAccountData;
