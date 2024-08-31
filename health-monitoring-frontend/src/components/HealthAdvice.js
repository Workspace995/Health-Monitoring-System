import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStethoscope, faSpinner } from '@fortawesome/free-solid-svg-icons';
import './HealthAdvice.css';

const HealthAdvice = () => {
  const [question, setQuestion] = useState('');
  const [advice, setAdvice] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGetAdvice = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/virtualassistant/healthadvice', { question });
      setAdvice(response.data.advice);
    } catch (error) {
      console.error('Error fetching health advice:', error);
      setAdvice('Error fetching health advice. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="health-advice-container">
      <div className="health-advice-header">
        <FontAwesomeIcon icon={faStethoscope} size="2x" />
        <h2>Get Health Advice</h2>
      </div>
      <input
        type="text"
        placeholder="Ask a health-related question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="health-advice-input"
      />
      <button onClick={handleGetAdvice} className="health-advice-button">
        Get Advice
      </button>
      {loading ? (
        <div className="spinner">
          <FontAwesomeIcon icon={faSpinner} spin size="2x" />
        </div>
      ) : (
        advice && <p className="health-advice-result">{advice}</p>
      )}
    </div>
  );
};

export default HealthAdvice;
