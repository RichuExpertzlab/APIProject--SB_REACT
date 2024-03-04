// Authentication.js
import React, { useState } from 'react';
import './Authentication.css'; // Import CSS file

function Authentication() {
  // State to manage authentication method
  const [authMethod, setAuthMethod] = useState('None');

  // Function to handle authentication method change
  const handleAuthMethodChange = (event) => {
    setAuthMethod(event.target.value);
  };

  // Render the Authentication component
  return (
    <div className="authentication">
      <h2>Authentication</h2>
      <div className="authentication-method">
        <label htmlFor="auth-method">Authentication Method:</label>
        <select id="auth-method" value={authMethod} onChange={handleAuthMethodChange}>
          <option value="None">None</option>
          <option value="Basic">Basic Auth</option>
          <option value="OAuth2">OAuth 2.0</option>
          {/* Add other authentication methods as needed */}
        </select>
      </div>
      {/* Additional components for configuring authentication parameters */}
      {authMethod === 'Basic' && <BasicAuthConfig />}
      {authMethod === 'OAuth2' && <OAuth2Config />}
      {/* Add components for other authentication methods */}
    </div>
  );
}

// Component for configuring Basic Authentication
function BasicAuthConfig() {
  // State to manage username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle username change
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  // Function to handle password change
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Render the BasicAuthConfig component
  return (
    <div className="basic-auth-config">
      <h3>Basic Authentication</h3>
      <div className="input-group">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" value={username} onChange={handleUsernameChange} />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} />
      </div>
    </div>
  );
}

// Component for configuring OAuth 2.0
function OAuth2Config() {
  // State to manage OAuth 2.0 parameters
  const [clientId, setClientId] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [redirectUri, setRedirectUri] = useState('');

  // Function to handle client ID change
  const handleClientIdChange = (event) => {
    setClientId(event.target.value);
  };

  // Function to handle client secret change
  const handleClientSecretChange = (event) => {
    setClientSecret(event.target.value);
  };

  // Function to handle redirect URI change
  const handleRedirectUriChange = (event) => {
    setRedirectUri(event.target.value);
  };

  // Render the OAuth2Config component
  return (
    <div className="oauth2-config">
      <h3>OAuth 2.0</h3>
      <div className="input-group">
        <label htmlFor="client-id">Client ID:</label>
        <input type="text" id="client-id" value={clientId} onChange={handleClientIdChange} />
      </div>
      <div className="input-group">
        <label htmlFor="client-secret">Client Secret:</label>
        <input type="password" id="client-secret" value={clientSecret} onChange={handleClientSecretChange} />
      </div>
      <div className="input-group">
        <label htmlFor="redirect-uri">Redirect URI:</label>
        <input type="text" id="redirect-uri" value={redirectUri} onChange={handleRedirectUriChange} />
      </div>
    </div>
  );
}

export default Authentication;
