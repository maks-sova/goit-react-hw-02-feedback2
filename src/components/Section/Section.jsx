import React from 'react';
import css from './Section.css';

export default function Section({ title, children }) {
  return <h2 className={css.title}>{title}</h2>;
}
