import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';

function Navbar({ title, menu, showMenu, setShowMenu }) {
  return (
    <div className="bg-[#95aedf] w-full flex justify-between items-center p-4">
      <h1 className="text-lg text-[#202520] font-semibold">{title}  </h1>
      {menu &&
        <div className="md:hidden text-md text-black" onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? <IoMdClose /> : <GiHamburgerMenu />}
        </div>
      }
    </div>
  )
}

export default Navbar;