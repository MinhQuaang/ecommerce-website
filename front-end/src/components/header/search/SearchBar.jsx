import { FaSearch } from "react-icons/fa";

function SearchBar() {
  return (
    <div>
      <input type="text" placeholder="Search for products..." />
      <FaSearch />
    </div>
  );
}

export default SearchBar;
