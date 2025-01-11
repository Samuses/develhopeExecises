import React, { useState } from "react";
import useBotResponse from "./useBotResponse";

export default function ChatBot() {
  const [userMessage, setUserMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const { response, isLoading, isError, refetch } = useBotResponse(userMessage);

  const handleSendMessage = () => {
    if (userMessage.trim()) {
      // Aggiungi il messaggio dell'utente
      setMessages([...messages, { sender: "user", text: userMessage }]);
      setUserMessage(""); // Resetta l'input

      // Effettua una richiesta al bot
      refetch().then(() => {
        if (response) {
          setMessages((prev) => [
            ...prev,
            { sender: "bot", text: response },
          ]);
        }
      });
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h2>Chat Bot</h2>
      <div style={{ border: "1px solid #ccc", padding: "10px", height: "300px", overflowY: "auto" }}>
        {messages.map((msg, index) => (
          <div key={index} style={{ textAlign: msg.sender === "user" ? "right" : "left" }}>
            <p>
              <strong>{msg.sender === "user" ? "Tu" : "Bot"}:</strong> {msg.text}
            </p>
          </div>
        ))}
        {isLoading && <p>Sto pensando...</p>}
        {isError && <p>Errore nella comunicazione con il server!</p>}
      </div>
      <input
        type="text"
        value={userMessage}
        onChange={(e) => setUserMessage(e.target.value)}
        style={{ width: "80%", padding: "10px" }}
      />
      <button onClick={handleSendMessage} style={{ padding: "10px", marginLeft: "10px" }}>
        Invia
      </button>
    </div>
  );
}
