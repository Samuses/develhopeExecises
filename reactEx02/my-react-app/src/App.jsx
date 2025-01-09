// src/App.jsx
import React from 'react';
import Hello from './Hello/Hello';
import Message from './message/Message';

const App = () => {
  return (
    <div>
      <Hello />
      <Hello />
      {/* Rendering the Message component directly within the App component */}
      <Message />
    </div>
  );
};

export default App;
