import React from "react";
import Styles from "./card.module.scss";
const Card = () => {
  return (
    <div className={`${Styles.card}`}>
      <img
        className={`${Styles.cardImg}`}
        src="https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/orange_card.png"
        alt="orange_card"
      />
      <div className={`${Styles.cardPriceDetails}`}>
        <span className={`${Styles.cardName}`}>Food Card</span>
        <div>
          <span className={`${Styles.cardOriginalPrice}`}>$30.00</span>
          <span className={`${Styles.cardFinalPrice}`}>$21.00</span>
        </div>
      </div>
      <p className={`${Styles.cardContent}`}>
        This card is used for spending on Food merchants.
      </p>
    </div>
  );
};

export default Card;
