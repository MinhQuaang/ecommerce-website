import { Link } from "react-router-dom";

function MainMenu() {
  const menuList = [
    {
      id: 1,
      title: "Home",
      path: "/",
    },
    {
      id: 2,
      title: "Shop",
      path: "/shop",
    },
    {
      id: 3,
      title: "Products",
      path: "/products",
    },
    {
      id: 4,
      title: "Blog",
      path: "/blog",
    },
    {
      id: 5,
      title: "Deal Zone",
      path: "/deal",
    },
  ];
  return (
    <>
      <ul className="hidden lg:flex">
        {menuList?.map(({ id, title, path }) => (
          <li key={id}>
            <Link
              to={path}
              className="block px-4 text-sm text-[#111111] hover:text-primary"
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default MainMenu;
