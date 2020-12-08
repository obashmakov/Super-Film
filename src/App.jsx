/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Calendar } from './components/Calendar';
import { Header } from './components/Header';
import { Content } from './components/Content';
import './App.scss';

export const App = () => {
  const [date, setDate] = useState(null);

  const handleDateChange = newDate => setDate(newDate);

  return (
    <div className="container">
      <Header />
      <Content />
      <Calendar onChange={handleDateChange} />
    </div>
  );
};
