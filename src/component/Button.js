import React from "react";

const Button = (props) => {
  return (
    <>
      <button className="button" name={props.name} onClick={props.onClick}>
        {props.children}
      </button>
    </>
  );
};

export default Button;
