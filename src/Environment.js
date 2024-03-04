import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import './Environment.css'; // Import CSS file

function Environment() {
  // State to manage environment variables
  const [variables, setVariables] = useState([{ key: '', value: '' }]);
  const [submittedURL, setSubmittedURL] = useState('');

  // Function to add a new environment variable
  const addVariable = () => {
    setVariables([...variables, { key: '', value: '' }]);
  };

  // Function to handle change in environment variable key
  const handleKeyChange = (index, event) => {
    const newVariables = [...variables];
    newVariables[index].key = event.target.value;
    setVariables(newVariables);
  };

  // Function to handle change in environment variable value
  const handleValueChange = (index, event) => {
    const newVariables = [...variables];
    newVariables[index].value = event.target.value;
    setVariables(newVariables);
  };

  // Function to remove an environment variable
  const removeVariable = (index) => {
    const newVariables = [...variables];
    newVariables.splice(index, 1);
    setVariables(newVariables);
  };

  // Function to handle submission of environment variables
  const handleSubmit = async () => {
    try {
      // Send the variables to the backend
      const response = await axios.post('http://localhost:8081/api/environment/submit', variables);
      setSubmittedURL(response.config.url); // Get the URL from the request config
    } catch (error) {
      console.error('Error submitting variables:', error);
    }
  };

  // Render the Environment component
  return (
    <div className="environment">
      <h2>Environment</h2>
      <div className="environment-variables">
        {variables.map((variable, index) => (
          <div key={index} className="environment-variable">
            <input
              type="text"
              value={variable.key}
              onChange={(event) => handleKeyChange(index, event)}
              placeholder="Variable name"
            />
            <br /> {/* Line break added here */}
            <input
              type="text"
              value={variable.value}
              onChange={(event) => handleValueChange(index, event)}
              placeholder="Value"
            />
            <button onClick={() => removeVariable(index)}>Remove</button>
          </div>
        ))}
      </div>
      <button onClick={addVariable}>Add Variable</button>&nbsp;
      <button onClick={handleSubmit}>Submit</button>
      {submittedURL && (
        <div>
          <p>Submitted to: {submittedURL}</p>
        </div>
      )}
    </div>
  );
}

export default Environment;
