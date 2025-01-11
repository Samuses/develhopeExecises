import React, { useState, useRef, useEffect } from 'react';

const ChatApp = () => {
  // Stato per i messaggi
  const [messages, setMessages] = useState([]);
  // Stato per il messaggio attuale
  const [currentMessage, setCurrentMessage] = useState('');
  
  // Riferimento per la finestra di chat (per lo scrolling)
  const chatEndRef = useRef(null);

  // Funzione per gestire l'invio del messaggio
  const handleSendMessage = () => {
    if (currentMessage.trim() !== '') {
      setMessages([...messages, currentMessage.trim()]);
      setCurrentMessage('');
    }
  };

  // Gestire l'evento di pressione del tasto "Enter"
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  // Scrolla automaticamente verso il basso ogni volta che i messaggi cambiano
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="chat-app">
      <div className="chat-window">
        <div className="messages">
          {messages.map((message, index) => (
            <div key={index} className="message">
              {message}
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>
      </div>

      <div className="input-container">
        <input
          type="text"
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatApp;
