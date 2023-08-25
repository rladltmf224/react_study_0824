import React from "react";

const Welcome = (props) => {
  return (
    <div style={{ backgroundColor: "yellow", width: "200px" }}>
      <h1>안녕,{props.name}</h1>
    </div>
  );
};

export default Welcome;
