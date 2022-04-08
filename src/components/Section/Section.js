import React from 'react';
import './Section.css';
import propTypes from 'prop-types';

export default function Section({ title, children }) {
  return (
    <section className="containerStatistics">
      <h2 className="title">{title}</h2>
      {children}
    </section>
  );
}

Section.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.object.isRequired,
};
