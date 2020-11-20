import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from 'hooks/useStore';
import {
  H2, Text,
} from 'components';
import { RoutesList } from 'routes';

const Header = () => {
  const { authStore: { logOut } } = useStore();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="
      md:flex md:flex-row md:justify-between
      p-3 bg-white mb-8 bg-gray-900
      h-12
    "
    >
      <div className="flex justify-center">
        <H2>Header</H2>
      </div>
      <div
        className='text-white text-right hover:cursor-pointer'
        onClick={() => setIsOpen(state => !state)}
      >
        Menu
        <ul className={`pt-4 ${isOpen ? 'block' : 'hidden'}`}>
          <li className="text-black pt-2">
            <Link to={RoutesList.account}>
              <Text looks='link'>Account Settings</Text>
            </Link>
          </li>
          <li className="text-black pt-2">
            <Link to={RoutesList.dashboard}>
              <Text looks='link'>Dashboard</Text>
            </Link>
          </li>
          <li className="text-black pt-2">
            <Text
              looks='link'
              handleClick={logOut}
            >Log Out</Text>
          </li>
        </ul>
      </div>
    </div>
  );
};


export default Header;
