import React from "react";

const Title = props => {
  return (
    <div>
      <p className={props.className}>{props.title}</p>
    </div>
  );
};

export default Title;
