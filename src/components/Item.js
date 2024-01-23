import React, { useState } from "react";

export default function Item({ content, itemDoubleClickHandler }) {
  return (
    <div onDoubleClick={itemDoubleClickHandler}>
      <div>{content}</div>
    </div>
  );
}
