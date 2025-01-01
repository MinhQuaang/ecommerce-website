import Logo from "@/assets/logo.avif";
import { Link } from "react-router-dom";
import { FaCartPlus, FaHeart, FaUser, FaBars } from "react-icons/fa";

import Menu from "./menu/MainMenu";
import MenuMobile from "./menu/MenuMobile";
import { useState } from "react";
import SearchBar from "./search/SearchBar";
function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const closeMenu = () => {
    setIsOpenMenu(false);
  };
  return (
    <header className="xl:container mx-auto flex items-center justify-between px-4 relative">
      <div className="flex items-center">
        <div className="p-3 lg:hidden">
          <FaBars
            className="size-4 cursor-pointer hover:text-primary"
            onClick={() => setIsOpenMenu(true)}
          />
          <MenuMobile openMenu={isOpenMenu} handleCloseMenu={closeMenu} />
        </div>
        <Link to="/" className="mr-11">
          <img src={Logo} alt="logo" width="70" height="32" />
        </Link>
        <Menu />
      </div>
      <div className="flex items-center gap-5 text-lg">
        <div>
          <SearchBar />
        </div>
        <FaUser className="hover:text-primary" />
        <FaHeart className="hover:text-primary" />
        <FaCartPlus className="hover:text-primary" />
      </div>
    </header>
  );
}

export default Header;
