import React from "react";
import { useState } from "react";

const Contact = () => {
  const [data, setData] = useState(null);
  console.log(data);
  return (
    <div>
      <h1> Contact</h1>
      <h2>used by sai sumanth</h2>
      <button
        onClick={() => {
          setData(function () {
            console.log("sumanth");
            return "yaswanth sai";
          });
        }}
      >
        click me
      </button>
    </div>
  );
};

export default Contact;
