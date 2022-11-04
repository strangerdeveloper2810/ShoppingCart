import React from "react";
import { useParams } from "react-router-dom";
export default function Detail(props) {
  const param = useParams();
  console.log(param);
  return (
    <div>
      <h3 className="text-center text-warning fw-bold fs-3">Details Page</h3>
      <p>{param.id}</p>
    </div>
  );
}
