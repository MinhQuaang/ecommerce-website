import { FaSearch } from "react-icons/fa";
import SearchDrawer from "./SearchDrawer";
import { useState } from "react";

function SearchBar() {
  const [showSearchDrawer, setShowSearchDrawer] = useState(false);

  const handleCloseSearchDrawer = () => {
    setShowSearchDrawer(false);
  };
  return (
    <div>
      <FaSearch
        className="cursor-pointer hover:text-primary"
        onClick={() => {
          setShowSearchDrawer(true);
        }}
      />
      <SearchDrawer
        show={showSearchDrawer}
        handleClose={handleCloseSearchDrawer}
      />
    </div>
  );
}

export default SearchBar;
