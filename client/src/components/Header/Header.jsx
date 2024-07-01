import React, { useEffect, useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  useEffect(()=>{
    let el=document.querySelector(".show-menu")
    if(menuOpened){
        el.style="display:flex"
    }else{
        el.style="display:none"
    }
},[menuOpened])

  return (
    <section className="h-wrapper" >
      <div className="flexCenter innerWidth paddings h-container">
        {/* logo */}
        <Link to="/">
          <img src="./homelogo.jpg" alt="logo" width={120} />
        </Link>

        {/* menu */}
       
          <div
            // ref={menuRef}
            className="flexCenter h-menu"
           
          >
            <NavLink to="/properties">Properties</NavLink>

            <a href="mailto:dharmikdj@rknec.edu">Contact</a>


          </div>
        

        {/* for medium and small screens */}
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
          <div className="show-menu">
          <NavLink to="/properties">Properties</NavLink>

<a href="mailto:dharmikdj@rknec.edu">Contact</a>

          </div>
        </div>
        </OutsideClickHandler>
      </div>
    </section>
  );
};

export default Header;
