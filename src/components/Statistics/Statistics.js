import React from 'react';
import s from './Statistics.module.css';
import PropTypes from 'prop-types';

function Statistics({ title = '', stats }) {
  return (
    <div className={s.box}>
      <section className={s.statistics}>
        {title && <h2 className={s.title}>{title}</h2>}

        <ul className={s.statList}>
          {stats.map(data => (
            <li className={s.item} key={data.id}>
              <span className={s.label}>{data.label}</span>
              <span className={s.percentage}>{data.percentage}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
