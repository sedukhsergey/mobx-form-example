import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import {
  Footer, Header,
} from 'modules';
import { useStore } from '../../hooks/useStore';

type Match = {
    params: any;
}
type Props = {
    children: React.ReactElement;
    match: Match
};

const DashboardLayout: React.FC<Props> = ({
  children, match,
}) => {
  const {
    accountStore: {
      fetchAccount, localAccount,
    },
  } = useStore();
  useEffect(() => {
    fetchAccount();
  }, [fetchAccount]);

  return (
    <div className="flex flex-col justify-between h-screen bg-gray-100">
      <div>
        <Header />
        {React.cloneElement(children, { params: match.params })}
      </div>
      <div className="flex items-center justify-center bg-gray-900 p-3">
        <Footer />
      </div>
    </div>
  );
};

export default observer(DashboardLayout);
