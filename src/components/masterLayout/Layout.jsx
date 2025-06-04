import { useState } from "react";
// import {
//   Bars2Icon as MenuIcon,
//   ChevronDownIcon,
//   ChevronUpIcon,
//   ChevronLeftIcon,
//   PencilSquareIcon,
//   DocumentMagnifyingGlassIcon,
// } from "@heroicons/react/24/solid";
// import logo from "../assets/logo-white.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";

const initialOptions = [
  {
    name: "articles",
    icon: <MdKeyboardArrowDown className="h-5 w-5" />,
    subOptions: [
      {
        path: "/articles/create",
        name: "Create",
      },

      {
        path: "/articles/update",
        name: "Update",
      },
      {
        path: "/articles/list",
        name: "List",
      },
    ],
    expanded: false,
  },
  {
    name: "Case Study",
    icon: <MdKeyboardArrowDown className="h-5 w-5" />,
    subOptions: [
      {
        path: "/case-studies/create",
        name: "Create",
      },
      {
        path: "/case-studies/update",
        name: "Update",
      },
      {
        path: "/case-studies/list",
        name: "List",
      },
    ],
    expanded: false,
  },
];

const Layout = (props) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [options, setOptions] = useState(initialOptions);

  // Toggle expand/collapse for a specific parent option
  const toggleOption = (index) => {
    const newOptions = [...options];
    newOptions[index].expanded = !newOptions[index].expanded;
    setOptions(newOptions);
  };

  return (
    <div className=" overflow-hidden flex flex-row">
      <div
        className={`transition-width duration-300 over min-h-screen overflow-hidden ${
          isExpanded ? "w-64" : "w-16"
        } h-screen bg-[#670707] text-white relative`}
      >
        <button
          className={`absolute cursor-pointer -right-3 top-5 w-6 h-6 bg-[#9b0505]
           border-2 rounded-full  ${!isExpanded && "rotate-180"}`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <MdKeyboardArrowDown className="h-5 w-5" />
        </button>
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center">
            {/* <img src={logo} alt="ZORG IT" className="h-8 w-8" /> */}
            <p>logo</p>
            {isExpanded && <span className="ml-4">ZORG IT Grout</span>}
          </div>
        </div>
        <ul>
          {options.map((option, index) => (
            <li key={option.name} className="relative group">
              <div
                className={`flex items-center justify-between p-2 cursor-pointer hover:bg-[#9b0505] ${
                  !isExpanded ? "justify-center" : ""
                }`}
                onClick={() => toggleOption(index)}
              >
                <div
                  className={`flex items-center ${
                    !isExpanded ? "justify-center w-full" : ""
                  }`}
                >
                  {option.icon}
                  {isExpanded && <span className="ml-2">{option.name}</span>}
                </div>
                {isExpanded &&
                  (option.expanded ? (
                    <MdKeyboardArrowDown className="h-5 w-5" />
                  ) : (
                    <MdKeyboardArrowDown className="h-5 w-5" />
                  ))}
              </div>
              {!isExpanded && (
                <div className="absolute left-full top-0 w-48 bg-[#9b0505] hidden group-hover:block">
                  {option.subOptions.map((item, index) => (
                    <Link
                      to={item.path}
                      key={index}
                      className="pl-4 pr-2 py-1 cursor-pointer hover:bg-[#cf0404]"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
              {isExpanded && option.expanded && (
                <div
                  className={` flex flex-col transition-all duration-500 ease-in-out overflow-hidden ${
                    option.expanded ? "max-h-60" : "max-h-0"
                  }`}
                >
                  {option.subOptions.map((item, index) => (
                    <Link
                      to={item.path}
                      key={index}
                      className="pl-12 pr-4 py-1 cursor-pointer hover:bg-[#9b0505]"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div>{props.children}</div>
    </div>
  );
};

export default Layout;
