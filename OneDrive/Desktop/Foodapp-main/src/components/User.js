import { useState, useEffect } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState({ name: "sai", place: "srisailam" });

  useEffect(() => {
    console.log("user useeffect called");
    return function () {
      console.log("useEffect unmount called");
    };
  });
  console.log(count);
  return (
    <div className="user-card">
      <h1>Count:{count.name}</h1>
      <h2>{count.name}</h2>
      <h3>Location:Srisailam</h3>
      <h4>Contact:@Saisumanth</h4>
      <button
        onClick={() => {
          setCount((prevState) => ({ ...prevState, place: "Hderbad" }));
          console.log(count);
          // setCount((prevState) => prevState + 1);
          // console.log(count);
        }}
      >
        Count
      </button>
    </div>
  );
};

export default User;
