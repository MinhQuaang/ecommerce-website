import Logo from "@/assets/logo.avif";
import { Link } from "react-router-dom";
import { FaSearch, FaCartPlus, FaHeart, FaUser } from "react-icons/fa";
import Menu from "./menu/Menu";
function Header() {
  return (
    <header className="container mx-auto flex items-center justify-between">
      <div className="flex items-center">
        <Link to="/" className="mr-11">
          <img src={Logo} alt="logo" className="w-20" />
        </Link>
        <Menu />
      </div>
      <div className="flex items-center gap-5 text-lg cursor-pointer">
        <FaSearch className="hover:text-primary" />
        <FaUser className="hover:text-primary" />
        <FaHeart className="hover:text-primary" />
        <FaCartPlus className="hover:text-primary" />
      </div>
    </header>
  );
}

export default Header;
