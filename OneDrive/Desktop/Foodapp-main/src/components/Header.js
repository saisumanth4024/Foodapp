import * as MyComponents from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

// console.log(MyComponents)

function Header() {
  const [btnName, setBtnName] = useState(false);

  const onlineStatus = useOnlineStatus();
  // console.log("constructor of header called");
  const data = useContext(UserContext);
  // console.log(data);
  const cart = useSelector((store) => store.cart.items);
  console.log(cart);

  useEffect(() => {
    // console.log("useEffect called");
  }, []);

  return (
    <div className="flex justify-between items-center bg-pink-100 shadow-lg-mb-0.25 px-5 py-0">
      <div className="w-40 h-16">
        <img
          src={MyComponents.LOGO_URL}
          alt="logo"
          className="w-20 h-16 self-align-center"
        />
      </div>
      <div className="flex items-center">
        <ul className="flex p-0 m-4">
          {/* <li><a href="/about" target="self">sai</a></li> */}

          <li className="px-4">
            <Link to="/">Home </Link>
          </li>
          <li className="px-4">onlineStatus:{onlineStatus ? "🟢" : "🔴"}</li>

          <Link to="/about">
            <li className="px-4">About US</li>
          </Link>
          <Link to="/contact">
            <li className="px-4">Contact US</li>
          </Link>
          <Link to="/grocery">
            <li className="px-4">Grocery</li>
          </Link>
          <Link to="/cart">
            <li className="px-4 font-bold">
              Cart <span className="bg-slate-300 p-1">{cart.length}</span> items
            </li>
          </Link>

          <button
            type="button"
            className="login-btn"
            onClick={() => {
              setBtnName(!btnName);
            }}
          >
            {btnName == true ? "login" : "logout"}
          </button>
          <li className="px-4">{data.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
