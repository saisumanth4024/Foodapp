import React, { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("constructor of About class called");
  }

  render() {
    console.log("render of About class called");
    return (
      <div>
        <h1>About</h1>
        <div>
          <UserContext.Consumer>
            {(value) => {
              console.log(value);
              return <h1>{value.loggedInUser}</h1>;
            }}
          </UserContext.Consumer>
        </div>
        <h2>this is sai sumanth</h2>
        {/* <User name={"sai sumanth function"} /> */}
        <UserClass name="sai sumanth class" />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>this is sai sumanth</h2>
//       {/* <User name={"sai sumanth function"} /> */}
//       <UserClass name="sai sumanth class" />
//     </div>
//   );
// };

export default About;
