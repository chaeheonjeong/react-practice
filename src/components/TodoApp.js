import React, { useState, useCallback } from "react";
import TodoItem from "./Item";
import Item from "./Item";

export default function TodoApp() {
  const [list, setList] = useState([]);
  const [todo, setTodo] = useState("");
  const [editingIndex, setEditingIndex] = useState(-1);
  const [editingContent, setEditingContent] = useState("");

  const addList = useCallback(() => {
    setList([...list, todo]);
    setTodo("");
  }, [list, todo]);

  const deleteList = (index) => {
    const newList = list.filter((item, idx) => idx !== index);
    setList(newList);
  };

  const modifyList = (index) => {
    const newList = [...list];
    newList[index] = editingContent;
    setList(newList);
    setEditingIndex(-1);
  };

  const itemDoubleClickHandler = (index) => {
    setEditingIndex(index);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input
        type="text"
        placeholder="입력"
        value={todo}
        onChange={(event) => {
          setTodo(event.target.value);
        }}
      />
      <button onClick={addList}>입력</button>
      <h2>Todo Items</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {list.map((content, index) =>
          index === editingIndex ? (
            <div>
              <input
                type="text"
                defaultValue={content}
                onChange={(event) => {
                  setEditingContent(event.target.value);
                }}
              />
              <button
                onClick={() => modifyList(index)}
                style={{ marginLeft: "10px" }}
              >
                완료
              </button>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Item
                content={content}
                itemDoubleClickHandler={() => itemDoubleClickHandler(index)}
              />
              <button
                onClick={() => deleteList(index)}
                style={{ marginLeft: "10px" }}
              >
                삭제
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
}
