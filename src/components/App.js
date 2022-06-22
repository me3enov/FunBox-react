/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import api from '../utils/api';
import Main from './Main';

function App() {
  const [cards, setCards] = useState([]);
  const [texts, setTexts] = useState([]);

  useEffect(() => {
    api.getFoodItems()
      .then((res) => {
        const [items, info] = Object.values(res);
        setCards(items);
        setTexts(info);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="app">
      <Main
        texts={texts}
        cards={cards}
      />
    </div>
  );
}

export default App;
