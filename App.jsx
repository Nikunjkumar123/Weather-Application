import React, { useState } from 'react';
import Input from './components/Input';
import Card from './components/Card';

const App = () => {
  const [intpt, setInpt] = useState(''); // for handling the input
  const [loc, setLoc] = useState(''); // location
  const [temp, setTemp] = useState(''); // temp
  const [cod, setClod] = useState(''); // cloud
  const [humid, setHumid] = useState(''); // humidity
  const [error, setError] = useState(null); // error handling

  const showResult = (query) => {
    fetch(`https://api.weatherapi.com/v1/current.json?key=aab3aa8882314f08a0f121900242505&q=${query}&aqi=no`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('ERROR');
        }
        return res.json();
      })
      .then((data) => {
        setLoc(data.location.name);
        setTemp(data.current.temp_c);
        setClod(data.current.cloud);
        setHumid(data.current.humidity);
        setError(null); // Reset any previous errors
      })
      .catch((err) => {
        setError('Could not fetch weather data');
        console.error(err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (intpt) {
      showResult(intpt);
    } else {
      setError('Please enter a location');
    }
  };

  const fillInput = (e) => {
    setInpt(e.target.value);
  };

  const appStyle = {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
  };

  const formStyle = {
    marginBottom: '20px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: 'white',
    cursor: 'pointer',
  };

  const errorStyle = {
    color: 'red',
    marginTop: '10px',
  };

  return (
    <div style={appStyle}>
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <Input onChange={fillInput} value={intpt} placeholder="Enter location" />
        <button type="submit" style={buttonStyle}>Submit</button>
      </form>
      {error && <p style={errorStyle}>{error}</p>}
      <Card location={loc} Temp={temp} cloud={cod} humidity={humid} />
    </div>
  );
};

export default App;
