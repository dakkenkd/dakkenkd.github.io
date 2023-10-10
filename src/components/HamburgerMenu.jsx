import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import './HamburgerMenu.css';

export const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='sp humberger'>
      <button onClick={toggleMenu}>
        {isOpen ? <MdClose size={30} /> : <GiHamburgerMenu size={30} />}
      </button>
      <nav className={isOpen ? "menu-open" : "menu-closed"}>
        <div className='nav-menu'>
          <div className='nav-list'>HOME</div>
          <div className='nav-list'>WORKS</div>
          <div className='nav-list'>BLOGS</div>
          <div className='nav-list'>X(Twitter)</div>
          <div className='nav-list'>Qiita</div>
          <div className='nav-list'>Github</div>
        </div>
      </nav>
    </div>
  );
};
