import React from 'react';
import './History.css'; // Import CSS file

function History({ history }) {
  // Function to handle clicking on a history item
  const handleHistoryItemClick = (item) => {
    // Handle the click event, for example, re-run the request
    console.log('Clicked on history item:', item);
  };

  // Function to handle clearing the history
  const handleClearHistory = () => {
    // Handle clearing the history
    console.log('Clearing history...');
  };

  return (
    <div className="history">
      <h2>History</h2>
      <button onClick={handleClearHistory}>Clear History</button>
      <ul>
        {history.map((item, index) => (
          <li key={index} onClick={() => handleHistoryItemClick(item)}>
            <div className="history-item">
              <div className="method">{item.method}</div>
              <div className="url">{item.url}</div>
              {/* You can display more information such as headers, response status, etc. */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default History;
