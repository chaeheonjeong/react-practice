import React, { useRef } from "react";

export default function RegisterInputButton() {
  const inputRef = useRef();
  const focusInput = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <button onClick={focusInput}>입력하러 가기</button>
      <div style={{ height: 1200 }}></div>
      <input ref={inputRef} type="text" />
    </div>
  );
}
