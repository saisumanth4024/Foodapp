import * as MyComponents from "../utils/constants";



console.log(MyComponents)


const Header = () => {
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
          </ul>
        </div>
      </div>
    );
  }; 

  export default Header