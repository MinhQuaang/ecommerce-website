import { Link } from "react-router-dom";
import PreSearchItem from "./PreSearchItem";

function PreSearch() {
  return (
    <>
      <h2 className="text-lg text-black font-medium my-5">You May Also Like</h2>
      <div className="flex flex-col gap-4">
        {new Array(4).fill(4).map((_, index) => (
          <PreSearchItem key={index} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <Link
          to="#"
          className="btn-primary inline-block text-sm text-white bg-primary rounded-none hover:bg-black"
        >
          View all
        </Link>
      </div>
    </>
  );
}

export default PreSearch;
