import React, { useState, useRef } from "react";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Ciao!", sender: "me" },
    { id: 2, text: "Come stai?", sender: "other" },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [sender, setSender] = useState("me"); // Stato per il mittente
  const [chatSize, setChatSize] = useState({ width: 400, height: 500 }); // Dimensioni iniziali
  const chatRef = useRef(null);

  // Funzione per inviare un messaggio
  const sendMessage = () => {
    if (inputValue.trim()) {
      setMessages([
        ...messages,
        { id: messages.length + 1, text: inputValue, sender: sender },
      ]);
      setInputValue(""); // Resetta l'input
    }
  };

  // Funzione per il resize
  const handleResize = (e) => {
    const newWidth = Math.max(300, e.clientX - chatRef.current.offsetLeft); // Larghezza minima 300px
    const newHeight = Math.max(300, e.clientY - chatRef.current.offsetTop); // Altezza minima 300px
    setChatSize({ width: newWidth, height: newHeight });
  };

  return (
    <div
      className="chat-container"
      ref={chatRef}
      style={{
        width: `${chatSize.width}px`,
        height: `${chatSize.height}px`,
      }}
    >
      <div className="message-list">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`message-bubble ${message.sender === "me" ? "right" : "left"}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-area">
        {/* Dropdown per selezionare il mittente */}
        <select
          value={sender}
          onChange={(e) => setSender(e.target.value)}
          className="sender-selector"
        >
          <option value="me">Io</option>
          <option value="other">Altro</option>
        </select>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Scrivi un messaggio..."
        />
        <button onClick={sendMessage}>Invia</button>
      </div>
      {/* Area per il ridimensionamento */}
      <div
        className="resize-handle"
        onMouseDown={(e) => {
          e.preventDefault();
          document.addEventListener("mousemove", handleResize);
          document.addEventListener("mouseup", () => {
            document.removeEventListener("mousemove", handleResize);
          });
        }}
      ></div>
    </div>
  );
}

export default App;
