import { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: null,
      count1: {},
    };
    console.log("constructor of user class called");
  }

  componentDidMount() {
    console.log("Component did mount of UserClass is called");
    this.getData();
  }

  componentDidUpdate() {
    console.log("component did update ");
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  getData = async () => {
    const data = await fetch("https://api.github.com/users/saisumanth4024");
    const jsonData = await data.json();
    console.log(jsonData);
    this.setState(() => ({
      count1: jsonData,
    }));
  };

  render() {
    const { count, count1 } = this.state;
    console.log(count1);
    console.log("render of user class");
    // debugger;
    return (
      <div className="user-card">
        <h1>Count:{count}</h1>
        <button
          onClick={() => {
            console.log("onclick");
            // debugger;
            this.setState((prevState) => ({
              count: prevState.count + 1,
              // debugger,

              // debugger,
            }));
            // debugger;
            this.setState((prevState) => ({
              count: prevState.count + 1,
              // debugger,

              // debugger,
            }));
            // debugger;
          }}
        >
          Count Increase
        </button>
        <h2>Name:{count1.login}</h2>

        <h3>Location:Srisailam</h3>
        <h4>Contact:@Saisumanth</h4>
      </div>
    );
  }
}

export default UserClass;
