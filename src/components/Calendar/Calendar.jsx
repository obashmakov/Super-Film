/* eslint-disable no-console */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import * as calendar from '../../variables/calendarVars';
import './Calendar.scss';

export const Calendar = ({ onChange }) => {
  const [date, setDate] = useState(new Date());

  const { months } = calendar.calendarVars;
  const year = date.getFullYear();
  const month = date.getMonth();
  const today = String(new Date()).slice(0, 15);

  console.log(today);

  const handlePrevMonth = () => {
    setDate(new Date(year, month - 1));
  };

  const handleNextMonth = () => {
    setDate(new Date(year, month + 1));
  };

  const handleDay = (currentDate) => {
    onChange(currentDate);

    console.log(currentDate);
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
            <tr key={uuidv4()} className="calendar__row">
              {week.map(currentDate => (currentDate
                ? (
                  <td
                    key={uuidv4()}
                    className={today === String(currentDate).slice(0, 15)
                      ? 'calendar__day calendar__day--selected'
                      : 'calendar__day'
                    }
                    onClick={() => handleDay(currentDate)}
                  >
                    {currentDate.getDate()}
                  </td>
                )
                : <td key={uuidv4()} className="calendar__day" />))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Calendar.propTypes = {
  onChange: PropTypes.func.isRequired,
};
