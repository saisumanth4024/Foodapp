import * as MyComponents from "../utils/constants";
import { useState } from "react";


// console.log(MyComponents)


const Header = () => {
  const [btnName,setBtnName]=useState(false)
    return (
      <div className="header">
        <div className="logo-container">
          <img
            src={MyComponents.LOGO_URL}
            alt="logo"
            className="logo"
          />
        </div>
        <div className="nav-links">
          <ul className="links">
            <li>Home</li>
            <li>About US</li>
            <li>Contact US</li>
            <li>Cart</li>
            <button type="button" className="login-btn" onClick={()=>{
                setBtnName(!btnName)
            }}>{btnName==true?"login":"logout"}</button>
          </ul>
        </div>
      </div>
    );
  }; 

  export default Header