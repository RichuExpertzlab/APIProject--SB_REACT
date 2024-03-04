// App.js
import React, { useState } from 'react';
import Header from './Header';
import Request from './Request';
import Response from './Response';
import History from './History';
import Authentication from './Authentication';
import Environment from './Environment';
import './App.css'; // Import CSS file
function App() {
  // State variables to manage response and history
  const [response, setResponse] = useState(null);
  const [history, setHistory] = useState([]);

  // Function to handle response data and update history
  const handleResponse = (responseData) => {
    setResponse(responseData);
    // Add the request to history
    setHistory([...history, responseData]);
  };

  // Render JSX
  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <div className="sidebar">
          <Environment />
          <History history={history} />
        </div>
        <div className="content">
          <Authentication />
          {/* Request component takes onResponse callback */}
          <Request onResponse={handleResponse} />
          {/* Response component displays the response */}
          <Response response={response} />
        </div>
      </div>
    </div>
  );
}

export default App;
