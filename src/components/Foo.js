import React from "react";
function increment(state, props) {
  return {
    count: state.count + 1
  };
}
class Foo extends React.Component {
  foo = "foo";
  state = {
    count: 0
  };
  change = () => {
    // console.log(this.state.count);
    // this.setState({ count: 1 }, () => {
    //   console.log(this.state.count);
    // });
    //下方三次只会执行一次，因为react任务队列策略，合并为一次执行
    /*  this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 }); */
    this.setState(increment);
    console.log(this.state.count);
  };
  render() {
    return (
      <React.Fragment>
        <p onClick={this.change}>{this.foo}</p>
      </React.Fragment>
    );
  }
}

export default Foo;
