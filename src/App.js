import React, { useState } from 'react';
import './App.css';

function RegistrationForm() {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ fullName, phoneNumber, email });
  };

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <label htmlFor="fullName">ФИО:</label>
      <input
        type="text"
        id="fullName"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        required
      />
      <label htmlFor="phoneNumber">Номер телефона:</label>
      <input
        type="tel"
        id="phoneNumber"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        required
      />
      <label htmlFor="email">Email адрес:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Отправить</button>
    </form>
  );
}

export default RegistrationForm;

