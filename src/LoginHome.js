import React, { Fragment } from "react";
// import Login from "./Login";
import Auth from "./Auth";
export default class LoginHome extends React.Component {
  state = {
    name: "666"
  };
  changeName = () => {
    this.setState({
      name: parseInt(Math.random() * 100)
    });
  };

  render() {
    // return <Login>{({ userName }) => <h1>Hello {userName}</h1>}</Login>;
    return (
      <Fragment>
        <Auth
          login={({ userName, name }) => (
            <h1>
              hello {userName}，{name}
            </h1>
          )}
          name={this.state.name}
          nologin={() => <h1>Please Login</h1>}
        />
        <button onClick={this.changeName}>变换</button>
      </Fragment>
    );
  }
}
