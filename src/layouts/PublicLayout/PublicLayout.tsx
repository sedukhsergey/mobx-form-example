import React from 'react';
import {
  FooterPublic, HeaderPublic,
} from 'modules';

type Match = {
    params: any;
}
type Props = {
    children: React.ReactElement;
    match: Match
};

const PublicLayout: React.FC<Props> = ({
  children, match,
}) => (
  <div className="flex flex-col justify-between h-screen bg-white-100">
    <div>
      <HeaderPublic />
      {React.cloneElement(children, match.params && match.params)}
    </div>
    <FooterPublic />
  </div>
);

export default PublicLayout;
