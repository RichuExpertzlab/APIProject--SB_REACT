import React, { useState } from 'react';
import './Request.css'; // Import CSS file

function Request({ onResponse }) {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [body, setBody] = useState('');
  const [headers, setHeaders] = useState('');
  const [queryParams, setQueryParams] = useState('');

  const handleSendRequest = async () => {
    try {
      // Constructing URL with query parameters
      let requestUrl = url;
      if (queryParams) {
        requestUrl += `?${queryParams}`;
      }

      const requestOptions = {
        method: method,
        headers: headers ? JSON.parse(headers) : {}, // Convert headers string to JSON
        body: body
      };

      const response = await fetch(requestUrl, requestOptions);
      const responseData = await response.json();
      onResponse(responseData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="request">
      <h2>Send Request</h2>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter URL"
      />
      <select value={method} onChange={(e) => setMethod(e.target.value)}>
        <option value="GET">GET</option>
        <option value="POST">POST</option>
        <option value="PUT">PUT</option>
        <option value="DELETE">DELETE</option>
      </select>
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Enter Body"
      />
      <textarea
        value={headers}
        onChange={(e) => setHeaders(e.target.value)}
        placeholder="Enter Headers (in JSON format)"
      />
      <input
        type="text"
        value={queryParams}
        onChange={(e) => setQueryParams(e.target.value)}
        placeholder="Enter Query Parameters"
      />
      <button onClick={handleSendRequest}>Send Request</button>
    </div>
  );
}

export default Request;
