// import React from "react";
// class MyComponent extends React.Component {
//     constructor(props) {
//       // set the default internal state
//       this.state = {
//         clicks: 0
//       };
//     }

//     componentDidMount() {
//       this.refs.myComponentDiv.addEventListener('click', this.clickHandler);
//     }

//     componentWillUnmount() {
//       this.refs.myComponentDiv.removeEventListener('click', this.clickHandler);
//     }

//     clickHandler() {
//       this.setState({
//         clicks: this.clicks + 1
//       });
//     }

//     render() {
//       let children = this.props.children;

//       return (
//         <div className="my-component" ref="myComponentDiv">
//         <h2>My Component ({`${this.state.clicks} clicks`})</h2>
//         <h3>{this.props.headerText}</h3>
//       {children}
//       </div>
//       );
//     }
//   }

import React, { useEffect, useRef, useState } from "react";

export default function MyComponent({ children, headerText }) {
  const [clicks, setClicks] = useState(0);
  const myComponentRef = useRef();

  const clickHandler = () => {
    setClicks(clicks + 1);
  };

  useEffect(() => {
    myComponentRef.current.addEventListener("click", clickHandler);
    return () => {};
  });

  return (
    <div className="my-component" ref={myComponentRef}>
      <h2>Problem # 1</h2>
      <h2>My Component ({`${clicks} clicks`})</h2>
      <h3>{headerText}</h3>
      {children}
    </div>
  );
}
