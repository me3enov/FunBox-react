/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';
import { editPromoText } from '../utils/editText';
import dictionary from '../utils/dictionary';

function CardList({ item }) {
  const [span, text] = editPromoText(item, dictionary);

  return (
    <li className="card-box__promo-box">
      <p className="card-box__promo-text">
        <span className="card-box__promo-span">{`${span === '' ? span : `${span}\u00A0`}`}</span>
        {text}
      </p>
    </li>
  );
}

export default CardList;
