import React from 'react';
import './Header.scss';

export const Header = ({ date, setDate }) => (
  <header className="header">
    Super Film

    {date !== null && (
      <button
        className="header__button"
        type="button"
        onClick={() => setDate(null)}
      />
    )}
  </header>
);
