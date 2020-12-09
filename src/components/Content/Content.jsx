import React from 'react';
import TVimage from '../../images/TVimage.png';
import './Content.scss';

export const Content = () => (
  <section className="content">
    <img
      className="content__img"
      src={TVimage}
      alt="tv"
    />
    <p className="content__text">
      Для получения списка сериалов,
      пожалуйста, выберите
      необходимый месяц и день.
    </p>
  </section>
);
