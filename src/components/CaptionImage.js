import React from "react";

export default function CationImage({ imgUrl, caption }) {
  return (
    <div style={{}} className="">
      <img src={imgUrl} alt={caption} />
      <p>{caption}</p>
    </div>
  );
}
