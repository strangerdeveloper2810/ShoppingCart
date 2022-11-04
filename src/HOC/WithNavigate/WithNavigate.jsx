import React from "react";
import { useNavigate } from "react-router-dom";

export function WithNavigate(Component) {
  const navigate = useNavigate();
  return function (props) {
    return <Component navigate={navigate} {...props} />;
  };
}
