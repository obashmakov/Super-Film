/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import * as calendar from '../../variables/calendarVars';
import './Calendar.scss';

export const Calendar = ({ onChange }) => {
  const [date, setDate] = useState(new Date());

  const { months } = calendar.calendarVars;
  const year = date.getFullYear();
  const month = date.getMonth();

  const handlePrevMonth = () => {
    setDate(new Date(year, month - 1));
  };

  const handleNextMonth = () => {
    setDate(new Date(year, month + 1));
  };

  const handleDay = (currentDate) => {
    onChange(currentDate);
  };

  const monthData = calendar.getMonthData(date.getFullYear(), date.getMonth());

  return (
    <div className="calendar">
      <div className="calendar__header">
        <button
          className="calendar__button"
          type="button"
          onClick={handlePrevMonth}
        >
          {'<'}
        </button>

        <span className="calendar__month">
          {`${months[date.getMonth()]}`}
        </span>

        <button
          className="calendar__button"
          type="button"
          onClick={handleNextMonth}
        >
          {'>'}
        </button>
      </div>

      <table className="calendar__table">
        <tbody>
          {monthData.map(week => (
            <tr className="calendar__row">
              {week.map(currentDate => (currentDate
                ? (
                  <td
                    className="calendar__day"
                    onClick={() => handleDay(currentDate)}
                  >
                    {currentDate.getDate()}
                  </td>
                )
                : <td className="calendar__day" />))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
