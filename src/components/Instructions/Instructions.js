import React, { Fragment } from "react";
import emoji from "./emoji.svg";
import "./Instructions.css";

const Instructions = () => {
  return (
    <Fragment>
      <div className="instructions">
        <img alt="laughing crying emoji" src={emoji} />
        <p>Click on an emoji to view the emoji short name.</p>
      </div>
    </Fragment>
  );
};

export default Instructions;
