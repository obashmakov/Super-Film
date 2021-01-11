import React, { useEffect, useState } from 'react';
import { Calendar } from './components/Calendar';
import { Header } from './components/Header';
import { Content } from './components/Content';
import { MoviesList } from './components/MoviesList';
import { monthsVars } from './variables/monthsVars';
import './App.scss';

export const App = () => {
  const [date, setDate] = useState(null);
  const [dateToLoad, setDateToLoad] = useState(null);
  const [headerDate, setHeaderDate] = useState('');

  const handleDateChange = newDate => setDate(newDate);

  useEffect(() => {
    if (date) {
      const year = String(date).slice(11, 15);
      let month = String(date.getMonth() + 1);
      const day = String(date).slice(8, 10);

      if (month.length === 1) {
        month = `0${month}`;
      }

      setDateToLoad(`${year}-${month}-${day}`);
      setHeaderDate(`${day.startsWith(0)
        ? day.slice(1)
        : day} ${monthsVars[Number(month)]} ${year.slice(2)}`);
    }
  }, [date]);

  return (
    <div className="container">
      {!date && (
        <>
          <Header date={date} />
          <Content />
          <Calendar onChange={handleDateChange} />
        </>
      )}

      {dateToLoad && date && (
        <>
          <MoviesList
            date={dateToLoad}
            headerDate={headerDate}
            setDate={setDate}
          />
        </>
      )}
    </div>
  );
};
