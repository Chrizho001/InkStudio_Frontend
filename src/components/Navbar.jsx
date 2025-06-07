import { HiOutlineMenuAlt3 } from "react-icons/hi";
import DropdownMenu from "./DropdownMenu";

const Navbar = () => {
  return (
    <nav className="py-2 px-2 flex items-center justify-between bg-primary">
      {/* logo */}
      <div>
        <p className="text-xl md:text-2xl lg:text-3xl font-cairo font-semibold ">
          <span className="text-secondary">Ink</span>Studio
        </p>
      </div>
      <div className="">
        {/* <HiOutlineMenuAlt3 className="text-4xl"/> */}
        <DropdownMenu />
      </div>
    </nav>
  );
};

export default Navbar;
