import React, { useState } from 'react';

function AgeCalculator() {
  const [birthday, setBirthday] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const today = new Date();
    const birthDate = new Date(birthday);

    if (isNaN(birthDate)) {
      setAge(null);
      return;
    }

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
      years--;
      months += 12;
    }

    if (days < 0) {
      const prevMonthLastDay = new Date(
        today.getFullYear(),
        today.getMonth(),
        0
      ).getDate();
      days += prevMonthLastDay;
      months--;
    }

    setAge({ years, months, days });
  };

  const handleInputChange = (e) => {
    setBirthday(e.target.value);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      <label htmlFor="birthday" >Enter your birthday:</label><br></br>
      <input 
        type="date"
        id="birthday"
        value={birthday}
        onChange={handleInputChange}
        style={{ marginBottom: '10px' }}
      /><br></br>
      <button onClick={calculateAge} style={{ width: '200px',backgroundColor: 'blue', color: 'white'}}>Calculate</button>
      {age && (
        <div>
          <p>Years: {age.years}</p>
          <p>Months: {age.months}</p>
          <p>Days: {age.days}</p>
        </div>
      )}
    </div>
  );
}

export default AgeCalculator;
