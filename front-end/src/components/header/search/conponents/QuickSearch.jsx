import { Link } from "react-router-dom";

function QuickSearch() {
  return (
    <>
      <h2 className="text-lg text-black font-medium my-5">Quick search: </h2>
      <div className="flex gap-3 flex-wrap">
        {new Array(10).fill(0).map((_, index) => (
          <Link to="#" key={index} className="text-sm text-black underline">
            {"Danh mục " + index}
          </Link>
        ))}
      </div>
    </>
  );
}

export default QuickSearch;
