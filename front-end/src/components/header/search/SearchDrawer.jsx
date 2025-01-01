import { FaSearch } from "react-icons/fa";
import Overlay from "../../overlay/OverLay";
import QuickSearch from "./conponents/QuickSearch";
import PreSearch from "./conponents/PreSearch";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

function SearchDrawer({ show, handleClose }) {
  const [term, setTerm] = useState("");
  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <>
      <div
        className={`fixed right-0 top-0 bottom-0 bg-white z-50 w-[450px] max-w-[90%] p-9 overflow-y-scroll duration-150 ${
          show ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <IoClose
          className="absolute right-3 top-3 cursor-pointer hover:text-primary"
          onClick={() => {
            handleClose();
          }}
        />
        <h2 className="text-lg text-black font-medium mb-5">Search Product</h2>
        <div className="relative">
          <form>
            <input
              type="text"
              placeholder="Search for items..."
              className="pl-3 pr-10 py-2 w-full outline outline-1 outline-[#bbb] text-sm"
              onChange={handleChange}
            />
            <button type="submit">
              <FaSearch className="absolute right-3 top-2" />
            </button>
          </form>
        </div>
        <div>
          <QuickSearch />
          <PreSearch />
        </div>
      </div>
      <Overlay show={show} onClose={handleClose} />
    </>
  );
}

export default SearchDrawer;
