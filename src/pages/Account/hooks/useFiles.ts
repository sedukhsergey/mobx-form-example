import { useEffect } from 'react';
import { useStore } from 'hooks/useStore';

const useFiles = () => {
  const {
    accountStore: {
      localAccount: {
        accountData: {
          files,
          getAllFiles,
        },
      },
    },
  } = useStore();

  useEffect(() => {
    getAllFiles();
  }, [getAllFiles]);

  return [files] as const;
};

export default useFiles;
