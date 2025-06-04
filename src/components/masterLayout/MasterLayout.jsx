import { Fragment, useRef } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineLogout, AiOutlineMenu, AiOutlineUser } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
const MasterLayout = (props) => {
  let contentRef,
    sideNavRef,
    topNavRef = useRef();

  const MenuBarClickHandler = () => {
    let sideNav = sideNavRef;
    let content = contentRef;
    let topNav = topNavRef;
    if (sideNav.classList.contains("side-nav-open")) {
      sideNav.classList.add("side-nav-close");
      sideNav.classList.remove("side-nav-open");
      content.classList.add("content-expand");
      content.classList.remove("content");
      topNav.classList.remove("top-nav-open");
      topNav.classList.add("top-nav-close");
    } else {
      sideNav.classList.remove("side-nav-close");
      sideNav.classList.add("side-nav-open");
      content.classList.remove("content-expand");
      content.classList.add("content");
      topNav.classList.add("top-nav-open");
      topNav.classList.remove("top-nav-close");
    }
  };

  return (
    <Fragment>
      <div className="fixed top-0  right-0 left-0 px-0 ">
        <div className=" flex justify-between items-center align-middle px-4 py-2 bg-slate-200">
          <div>
            <div
              ref={(div) => {
                topNavRef = div;
              }}
              className="top-nav-open"
            >
              <h4 className="cursor-pointer text-black m-0 p-0">
                <a onClick={MenuBarClickHandler}>
                  <AiOutlineMenu size={25} />
                </a>
              </h4>
            </div>
          </div>

          <div className="float-right h-auto flex align-middle">
            <div className="dropdown dropdown-hover">
              {/* <img
                tabIndex={0}
                className=" w-10 h-10 rounded-full "
                src={User}
                alt=""
              /> */}
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-white w-60  right-0"
              >
                <li>
                  <NavLink to="/profle" className=" text-black">
                    <AiOutlineUser className="" />
                    Profile
                  </NavLink>
                </li>
                <li>
                  <a className=" text-black">
                    <AiOutlineLogout className="" />
                    <span className="">Logout</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={(div) => {
          sideNavRef = div;
        }}
        className="side-nav-open "
      >
        <a
          href="/"
          className="flex justify-center items-center align-middle bg-slate-700"
        >
          {/* <img src={logo} className=" w-20 h-14 py-2" /> */}
        </a>
        <div>
          <div className="collapse ">
            <input type="checkbox" />
            <div className="collapse-title  justify-between items-center px-4 py-4">
              <div className="flex justify-between items-center">
                <MdKeyboardArrowDown size={25} className="text-black" />
                <span className=" text-md font-medium text-black">
                  Find Doctors
                </span>
              </div>
            </div>
            <div className="collapse-content">
              <ul className=" flex flex-col text-end text-black text-sm font-medium">
                <li className="pb-2">
                  <a href="/doctor_create">Doctor Create</a>
                </li>
                <li className="pt-2">
                  <a href="/doctors_list">Doctor List</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="collapse ">
            <input type="checkbox" />
            <div className="collapse-title  justify-between items-center px-4 py-4 !min-h-0">
              <div className="flex justify-between items-center">
                <MdKeyboardArrowDown size={25} className="text-black" />
                <span className=" text-md font-medium text-black">
                  Hospitals
                </span>
              </div>
            </div>
            <div className="collapse-content">
              <ul className=" flex flex-col text-end text-black text-sm font-medium">
                <li className="pb-2">
                  <a href="/hospital_create">Hospitals Create</a>
                </li>
                <li className="pt-2">
                  <a href="/hospital_list">Hospitals List</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="collapse ">
            <input type="checkbox" />
            <div className="collapse-title  justify-between items-center px-4 py-4 !min-h-0">
              <div className="flex justify-between items-center">
                <MdKeyboardArrowDown size={25} className="text-black" />
                <span className=" text-md font-medium text-black">
                  Health Blog
                </span>
              </div>
            </div>
            <div className="collapse-content">
              <ul className=" flex flex-col text-end text-black text-sm font-medium">
                <li className="pb-2">
                  <a href="/health_blog_create">Health Blog Create</a>
                </li>
                <li className="pt-2">
                  <a href="/health_blog_list">Health Blog List</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div ref={(div) => (contentRef = div)} className="content">
        {props.children}
      </div>
    </Fragment>
  );
};

export default MasterLayout;
