import React, { useState } from 'react';
import { Button } from 'components';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="
            md:flex md:flex-row md:justify-between
            p-3 bg-white rounded-sm mb-8 bg-blue-300 shadow-lg
        "
    >
      <div className="md:flex">
        <h2>Header</h2>
      </div>
      <Button
        handleClick={() => setIsOpen(state => !state)}
        looks={`${isOpen ? 'small' : 'large'}`}
      >
        Open chat
      </Button>
    </div>
  );
};

export default Header;
