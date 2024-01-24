import React, { useState, useCallback } from "react";
import TodoItem from "./Item";
import Item from "./Item";
import ColorList from "./ColorList";

export default function TodoApp() {
  const [list, setList] = useState([]);
  const [todo, setTodo] = useState("");
  const [inputColor, setInputColor] = useState("white");

  const addList = useCallback(() => {
    const newItem = { content: todo, color: inputColor };
    setList([...list, newItem]);
    setTodo("");
  }, [list, todo, inputColor]);

  const deleteList = (index) => {
    const newList = list.filter((item, idx) => idx !== index);
    setList(newList);
  };

  const modifyTodo = (index, newContent, newColor) => {
    const newList = [...list];
    newList[index] = { content: newContent, color: newColor };
    setList(newList);
  };

  const selectColor = (color) => {
    setInputColor(color);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <h1>Todo App</h1>
      <div>
        <input
          type="text"
          placeholder="입력"
          value={todo}
          onChange={(event) => {
            setTodo(event.target.value);
          }}
          style={{
            backgroundColor: `${inputColor}`,
            borderColor: "#c0c0c0",
            borderRadius: "5px",
          }}
        />
        <button onClick={addList}>입력</button>
      </div>
      <ColorList selectColor={(color) => selectColor(color)} />
      <h2>Todo Items</h2>
      {list.map((item, index) => (
        <Item
          key={index + item.content}
          content={item.content}
          color={item.color}
          onModify={(newContent, newColor) =>
            modifyTodo(index, newContent, newColor)
          }
          onDelete={() => deleteList(index)}
        />
      ))}
    </div>
  );
}
