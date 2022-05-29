import React from "react";
import Styles from "./card.module.scss";

import AddToCartButton from "../Button/AddToCartBatton";
const Card = (props) => {
  const { cardImg, cardName, orgPrice, finalPrice, description } = props;
  return (
    <div className={`${Styles.card}`}>
      <div className={`${Styles.imgCont}`}>
        <img className={`${Styles.cardImg}`} src={cardImg} alt="orange_card" />
        <div className={`${Styles.imgShadow}`}></div>
      </div>
      <div className={`${Styles.cardPriceDetails}`}>
        <span className={`${Styles.cardName}`}>{cardName}</span>
        <div>
          {orgPrice && (
            <span className={`${Styles.cardOriginalPrice}`}>${orgPrice}</span>
          )}
          <span className={`${Styles.cardFinalPrice}`}>${finalPrice}</span>
        </div>
      </div>
      <p className={`${Styles.cardContent}`}>{description}</p>
      <div className={`${Styles.addCartBtn}`}>
        <AddToCartButton
          variant="primary"
          item={{
            id: props.id,
            name: cardName,
            price: props.finalPrice,
            discount: (orgPrice || finalPrice) - finalPrice
          }}
        />
      </div>
    </div>
  );
};

export default Card;
