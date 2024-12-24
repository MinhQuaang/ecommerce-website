import { IoClose } from "react-icons/io5";

// eslint-disable-next-line react/prop-types
function MenuMobile({ openMenu, handleCloseMenu }) {
  return (
    <>
      <div
        className={`fixed w-8/12 bg-white h-full top-0 left-0 z-20 duration-150 ${
          openMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <IoClose
          className="size-5 absolute right-3 top-3 cursor-pointer"
          onClick={handleCloseMenu}
        />
      </div>
      <div
        className={`fixed inset-0 bg-black w-full h-full z-10  ${
          openMenu ? "opacity-75" : "opacity-0 hidden"
        }`}
        onClick={handleCloseMenu}
      ></div>
    </>
  );
}

export default MenuMobile;