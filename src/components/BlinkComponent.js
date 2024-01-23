import React, { useEffect, useState } from "react";

export default function BlinkComponent({ text }) {
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const timeoutId = setInterval(() => {
      setShowText((showText) => !showText);
    }, 1000);
    return () => {
      clearInterval(timeoutId);
    };
  }, []);

  return (
    <div style={{ fontSize: 30 }}>
      {/* <button
        onClick={() => {
          setShowText(!showText);
        }}
      >
        클릭
      </button> */}
      {showText ? text : null}
    </div>
  );
}
