// import { Menu, Transition } from "@headlessui/react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { Fragment } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Home", to: "/", type: "route" },
  { name: "About", to: "#about", type: "anchor" },
  { name: "Services", to: "#services", type: "anchor" },
  { name: "Bookings", to: "#booking", type: "anchor" },
  { name: "Testimonial", to: "#testimonial", type: "anchor" },
  { name: "Login", to: "auth/login", type: "route" },
];

const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };




export default function DropdownMenu() {
  return (
    <div className="relative inline-block text-left z-50">
      <Menu as="div" className="relative">
        <div>
          <MenuButton className="flex items-center justify-center p-2 rounded-lg hover:bg-secondary transition focus:outline-0 border-none data-active:bg-secondary">
            <HiOutlineMenuAlt3 className="text-4xl text-white" />
          </MenuButton>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-150"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <MenuItems className="absolute right-0 mt-2 w-56 origin-top-right rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="p-2 space-y-1">
              {navigation.map((item) => (
                <MenuItem key={item.to}>
                  {() =>
                    item.type === "anchor" ? (
                      <button
                        onClick={() => scrollToSection(item.to)}
                        className={`block px-4 py-2 text-sm rounded-lg 
                         data-focus:bg-gray-100 data-focus:text-secondary text-gray-700
                      `}
                      >
                        {item.name}
                      </button>
                    ) : (
                      <Link
                        to={item.to}
                        className={`block px-4 py-2 text-sm rounded-lg 
                         data-focus:bg-gray-100 data-focus:text-secondary text-gray-700
                      `}
                      >
                        {item.name}
                      </Link>
                    )
                  }
                </MenuItem>
              ))}
            </div>
          </MenuItems>
        </Transition>
      </Menu>
    </div>
  );
}
