import React from "react";
function Navbar() {
  return (
    <nav className=" bg-main-bg md:sticky top-0 z-10  p-5 flex flex-row place-content-between ">
      <div className="logo  font-main-font text-coding-color text-2xl font-bold py-1 ">
        RIDA
      </div>
      <div className="navigation text-white  ">
        <ul className="flex flex-row place-content-around font-coding-font gap-x-4 text-gray-light text-xs p-4 ">
          <li>
            <a className="hover:text-white" href="#">
              <span className="text-coding-color ">1.</span>About
            </a>
          </li>
          <li>
            <a className="hover:text-white" href="#">
              {" "}
              <span className="text-coding-color">2.</span>Experience
            </a>
          </li>
          <li>
            <a className="hover:text-white" href="">
              <span className="text-coding-color">3.</span>Skills
            </a>
          </li>
          <li>
            <a className="hover:text-white" href="">
              {" "}
              <span className="text-coding-color">4.</span>Projects{" "}
            </a>
          </li>
          <li>
            <a className="hover:text-white" href="">
              <span className="text-coding-color">5.</span>Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
