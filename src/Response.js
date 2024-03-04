import React from 'react';

function Response({ response }) {
  if (!response) {
    return null; // If there's no response, don't display anything
  }

  return (
    <div className="response">
      <h2>Response</h2>
      <div className="response-info">
        <div>Status: {response.status}</div>
        <div>Headers:</div>
        <ul>
          {Object.entries(response.headers).map(([key, value], index) => (
            <li key={index}>{key}: {value}</li>
          ))}
        </ul>
      </div>
      <div className="response-body">
        <h3>Body:</h3>
        <pre>{JSON.stringify(response.data, null, 2)}</pre>
      </div>
    </div>
  );
}

export default Response;
