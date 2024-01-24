import React, { useState } from "react";
import ColorList from "./ColorList";

export default function Item({ content, color, onModify, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newContent, setNewContent] = useState(content);
  const [newColor, setNewColor] = useState(color);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleEdit = () => {
    onModify(newContent, newColor);
    setIsEditing(false);
  };

  const selectColor = (color) => {
    setNewColor(color);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      {isEditing ? (
        <>
          <input
            type="text"
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
            style={{
              backgroundColor: `${newColor}`,
              borderRadius: "5px",
              borderColor: "#c0c0c0",
            }}
          />
          <ColorList selectColor={(color) => selectColor(color)} />
          <button onClick={handleEdit}>완료</button>
        </>
      ) : (
        <>
          <div
            onDoubleClick={handleDoubleClick}
            style={{ backgroundColor: `${color}` }}
          >
            {content}
          </div>
          <button onClick={onDelete}>삭제</button>
        </>
      )}
    </div>
  );
}
