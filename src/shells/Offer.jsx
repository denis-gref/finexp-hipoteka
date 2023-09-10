import React from 'react';
import './Offer.scss';
import OfferImg from '../assets/img/fferImg.svg';
import Button from '../components/Button';

function Offer(props) {
  return (
    <div className="offer">
      <div className="offer-content">
        <div className="offer-text-content">
          <div className="offer-capture">
            {props.t("offer_capture")} <span>{props.t("offer_capture_span")}</span>
          </div>
          <div className="offer-description">
            {props.t("offer_description")}
          </div>
          <div className="offer-button">
            <Button text={props.t("form_button")} handlerSelectModal={props.handlerSelectModal} />
          </div>
        </div>
        <div className="offer-image">
          <img src={OfferImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Offer;