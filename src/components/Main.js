/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Card from './Card';

function Main({ cards, texts }) {
  const items = Object.values(cards);
  return (
    <main className="content app__content">
      <h1 className="content__title">Ты сегодня покормил кота?</h1>
      <section className="cards app__cards" aria-label="Cards">
        <ul className="gallery">
          {items.map((card) => (
            <Card
              key={card.id}
              card={card}
              texts={texts}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
