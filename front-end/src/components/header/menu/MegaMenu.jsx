import { Link } from "react-router-dom";

function MegaMenu({ item }) {
  return (
    <div className="absolute min-h-[400px] bg-white w-4/5 top-full left-0 shadow-[0px_0px_6px_#eee] py-7 px-8 grid grid-cols-4 gap-5 duration-150 translate-y-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
      {item?.map(({ id, title, products }) => (
        <div key={id}>
          <h1 className="py-1 text-[13px] font-medium uppercase">{title}</h1>
          <div className="flex flex-col gap-2 mt-3">
            {products?.map(({ id, title, path }) => (
              <Link
                key={id}
                to={path}
                className="text-[13px] text-[#111111] hover:text-primary"
              >
                {title}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MegaMenu;
