import { Link } from "react-router-dom";
import { menuList } from "../../../constants/menuList";
import MegaMenu from "./MegaMenu";

function MainMenu() {
  return (
    <>
      <ul className="hidden lg:flex">
        {menuList?.map(({ id, title, path, child }) => (
          <li key={id} className="group py-5">
            <Link
              to={path}
              className="block px-4 text-sm text-[#111111] hover:text-primary"
            >
              {title}
            </Link>
            {child && <MegaMenu item={child} />}
          </li>
        ))}
      </ul>
    </>
  );
}

export default MainMenu;
