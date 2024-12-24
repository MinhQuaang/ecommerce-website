import NotFoundImage from "@/assets/not-found.avif";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#fafafa] py-24">
      <div className="max-w-[500px]">
        <img src={NotFoundImage} alt="" className="w-full" />
      </div>
      <h2 className="text-3xl text-black uppercase mt-5 font-bold">
        Page not found
      </h2>
      <p className="py-4">This page could not be found.</p>
      <div className="flex gap-5">
        <Link
          to="/"
          className="btn-primary text-xs text-white bg-[#333] hover:bg-primary"
        >
          Go to home
        </Link>
        <Link
          to="/shop"
          className="btn-primary btn-primary text-xs text-white bg-[#333] hover:bg-primary"
        >
          Continue shopping
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
