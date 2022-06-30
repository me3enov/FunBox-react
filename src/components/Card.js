/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import CardList from './CardList';
import { replaceText } from '../utils/editText';

function Card({ card, texts }) {
  const [hovered, setHovered] = useState(false);
  const [selected, setSelected] = useState(false);
  const [hoveredSpan, setHoveredSpan] = useState(false);
  const [disabled] = useState(card.disabled);

  // TEXT START
  const cardBoxText = (
    !disabled && hovered && selected ? texts.textAfter : texts.text
  );
  const cardBuyTextDisabled = (
    disabled ? replaceText(texts.subtextDisable, card.subtitle) : `${texts.subtext}\u00A0`
  );
  const cardBuyText = (
    !disabled && selected ? card.subtextSelected : cardBuyTextDisabled
  );
  const cardBuySpanText = (
    !disabled && !selected ? texts.subtextBuy : ''
  );
  // TEXT END
  // STYLES START
  // Disabled classes
  const cardBoxDisabledClassName = (
    disabled ? 'card-box_disabled' : ''
  );
  const cardBoxCardTextDisabledClassName = (
    disabled ? 'card__text_disabled' : ''
  );
  const cardBoxImageDisabledClassName = (
    disabled ? 'card-box__image_disabled' : ''
  );
  const cardBoxLabelDisabledClassName = (
    disabled ? 'card-box__label_disabled' : ''
  );
  const cardBoxPromoListDisabledClassName = (
    disabled ? 'card-box__promo-list_disabled' : ''
  );
  const cardBoxStrokeDisabledClassName = (
    disabled ? 'card-box__stroke_disabled' : ''
  );
  const cardBoxSubtitleDisabledClassName = (
    disabled ? 'card-box__subtitle_disabled' : ''
  );
  const cardBoxTextDisabledClassName = (
    disabled ? 'card-box__text_disabled' : ''
  );
  const cardBoxTitleDisabledClassName = (
    disabled ? 'card-box__title_disabled' : ''
  );

  // Selected classes
  const cardBoxLabelSelectedClassName = (
    !disabled && !hovered && selected ? 'card-box__label_selected' : ''
  );
  const cardBoxStrokeSelectedClassName = (
    !disabled && !hovered && selected ? 'card-box__stroke_selected' : ''
  );

  // Hovered classes
  const cardBoxStrokeHoveredClassName = (
    !disabled && hovered && !selected ? 'card-box__stroke_hovered' : ''
  );
  const cardBoxLabelHoveredClassName = (
    !disabled && hovered && !selected ? 'card-box__label_hovered' : ''
  );
  const cardBoxCardSpanHoveredClassName = (
    !disabled && hoveredSpan ? 'card__span_hovered' : ''
  );

  // Selected Hovered classes
  const cardBoxLabelSelectedHoveredClassName = (
    !disabled && hovered && selected ? 'card-box__label_selected-hovered' : ''
  );
  const cardBoxStrokeSelectedHoveredClassName = (
    !disabled && hovered && selected ? 'card-box__stroke_selected-hovered' : ''
  );
  const cardBoxTextSelectedHoveredClassName = (
    !disabled && hovered && selected ? 'card-box__text_selected-hovered' : ''
  );
  // STYLES END

  const list = Object.values(card.promoItems);

  function handleHover() {
    setHovered(true);
  }

  function handleUnhover() {
    setHovered(false);
  }

  function handleSpanHover() {
    setHoveredSpan(true);
  }

  function handleSpanUnhover() {
    setHoveredSpan(false);
  }

  function handleSelectToggle() {
    setSelected(!selected);
    setHovered(false);
  }

  function handleKeyToggle(evt) {
    if (evt.key === 'Enter') {
      setSelected(!selected);
      setHovered(false);
    }
  }

  return (
    <li className="card">
      <div
        className={`card-box ${cardBoxDisabledClassName}`}
        onMouseEnter={handleHover}
        onMouseLeave={handleUnhover}
        onClick={handleSelectToggle}
        onKeyPress={handleKeyToggle}
        role="button"
        tabIndex="0"
      >
        <div className={`card-box__image ${card.imageClass} ${cardBoxImageDisabledClassName}`} />
        <svg className="card-box__border">
          <path className={`card-box__stroke ${cardBoxStrokeDisabledClassName} ${cardBoxStrokeSelectedClassName} ${cardBoxStrokeHoveredClassName} ${cardBoxStrokeSelectedHoveredClassName}`} d="M2 468V40.505L40.505 2H308c5.523 0 10 4.477 10 10v456c0 5.523-4.477 10-10 10H12c-5.523 0-10-4.477-10-10Z" />
        </svg>
        <div className="card-box__info">
          <p
            className={`card-box__text ${cardBoxTextDisabledClassName}
            ${cardBoxTextSelectedHoveredClassName}`}
          >
            {cardBoxText}
          </p>
          <h2 className={`card-box__title ${cardBoxTitleDisabledClassName}`}>{texts.title}</h2>
          <h3 className={`card-box__subtitle ${cardBoxSubtitleDisabledClassName}`}>{card.subtitle}</h3>
          <ul className={`card-box__promo-list ${cardBoxPromoListDisabledClassName}`}>
            {list.map((item) => (
              <CardList
                key={item.toString()}
                item={item}
              />
            ))}
          </ul>
        </div>
        <div className={`card-box__label ${cardBoxLabelDisabledClassName} ${cardBoxLabelSelectedClassName} ${cardBoxLabelHoveredClassName} ${cardBoxLabelSelectedHoveredClassName}`}>
          <p className="card-box__label-number">{card.labelNumber}</p>
          <p className="card-box__label-text">{texts.labelText}</p>
        </div>
      </div>
      <div className="card__action-text">
        <p className={`card__text ${cardBoxCardTextDisabledClassName}`}>
          {cardBuyText}
          <span
            className={`card__span ${cardBoxCardSpanHoveredClassName}`}
            onMouseEnter={handleSpanHover}
            onMouseLeave={handleSpanUnhover}
            onClick={handleSelectToggle}
            onKeyPress={handleKeyToggle}
            role="button"
            tabIndex="0"
          >
            {cardBuySpanText}
          </span>
        </p>
      </div>
    </li>
  );
}

export default Card;
