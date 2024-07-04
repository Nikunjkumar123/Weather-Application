import React from 'react';

const Card = (props) => {
  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    maxWidth: '300px',
    margin: '16px auto',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const headingStyle = {
    margin: '8px 0',
    color: '#333',
  };

  return (
    <div style={cardStyle}>
      <h3 style={headingStyle}>Location: {props.location}</h3>
      <h3 style={headingStyle}>Temperature: {props.Temp}°C</h3>
      <h3 style={headingStyle}>Cloud: {props.cloud}%</h3>
      <h3 style={headingStyle}>Humidity: {props.humidity}%</h3>
    </div>
  );
}

export default Card;
