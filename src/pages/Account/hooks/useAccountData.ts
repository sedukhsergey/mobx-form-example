import {
  useState, useEffect,
} from 'react';

import { useStore } from 'hooks/useStore';

type AccountData = {
  name: string,
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

  const [name, setData] = useState<string>('');

  useEffect(() => {
    getAccountSettingsSession();
  }, [getAccountSettingsSession]);

  useEffect(() => {
    if (sessionData) {
      const { name } = sessionData;
      setData(name);
    }
  }, [sessionData]);

  return [name, setData] as const;
};

export default useAccountData;
