import product1 from "@/assets/image_product/product1.jpg";
import { Link } from "react-router-dom";
function PreSearchItem() {
  return (
    <div className="flex gap-4 items-center">
      <div className="w-20 text-sm">
        <Link to="#">
          <img src={product1} alt="" />
        </Link>
      </div>
      <div className="flex flex-col text-sm">
        <Link to="#" className="hover:text-primary">
          Long Sleeve Top Black
        </Link>
        <div className="flex gap-1 py-1">
          <p className="line-through">$40.00</p>
          <p className="text-red-400">$25.00</p>
        </div>
      </div>
    </div>
  );
}

export default PreSearchItem;
