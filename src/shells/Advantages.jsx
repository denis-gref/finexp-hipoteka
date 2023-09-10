import React from 'react';
import './Advantages.scss';
import card1 from '../assets/img/card1.svg';
import card2 from '../assets/img/card2.svg';
import card3 from '../assets/img/card3.svg';
import card4 from '../assets/img/card4.svg';

function Advantages(props) {
  const cardsData = [
    {
      img:card1,
      capture:props.t("advantages_card1_capture"),
      description:props.t("advantages_card1_description")
    },
    {
      img:card2,
      capture:props.t("advantages_card2_capture"),
      description:props.t("advantages_card2_description")
    },
    {
      img:card3,
      capture:props.t("advantages_card3_capture"),
      description:props.t("advantages_card3_description")
    },
    {
      img:card4,
      capture:props.t("advantages_card4_capture"),
      description:props.t("advantages_card4_description")
    },
  ];

  const cardItem = cardsData.map((item) => (
    <div className="card-wrapper" key={item.capture}>
      <div className="card-content">
        <div className="card-img">
          <img src={item.img} alt="" />
        </div>
        <div className="card-capture">
          {item.capture}
        </div>
        <div className="card-description">
          {item.description}
        </div>
      </div>
    </div>
  ))

  return (
    <div id='advantages' className="advantages">
        <div  className="advantages-content">
          <div className="advantages-cepture">
          {props.t("advantages_capture")}
          </div>
          <div className="advantages-cards">
          {cardItem}
          </div>
        </div>
    </div>
  );
}

export default Advantages;