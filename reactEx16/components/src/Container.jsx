import React, { useState } from "react";

function Container({ title, children }) {
  const [isCollapsed, setIsCollapsed] = useState(false); // Stato per il collasso

  const toggleCollapse = () => setIsCollapsed(!isCollapsed); // Cambia stato di collasso

  return (
    <div
      style={{
        backgroundColor: "white",
        border: "2px solid red",
        padding: "10px",
        margin: "10px",
      }}
    >
      <h2 onClick={toggleCollapse} style={{ cursor: "pointer" }}>
        {title}
      </h2>
      {!isCollapsed && <div>{children}</div>}
    </div>
  );
}

export default Container;
