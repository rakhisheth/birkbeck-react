import React from "react";

const Links = props => {
  return (
    <li>
      <a href={props.url}>{props.name}</a>
    </li>
  );
};

export default Links;
