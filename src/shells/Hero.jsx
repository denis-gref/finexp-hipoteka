import React from 'react';
import './Hero.scss';
import Button from '../components/Button';
import HeroImg from '../assets/img/heroImg.svg'

function Hero(props) {
  return (
    <div className="hero">
        <div className="hero-content">
          <div className="hero-text-content">
              <div className="hero-capture">
              {props.t( "hero_capture")}<span> {props.t( "hero_capture_span")}</span>
              </div>
              <div className="hero-description">
              {props.t( "hero_description")}
              </div>
              <div className="hero-button">
                  <Button text={props.t("form_button")} handlerSelectModal={props.handlerSelectModal}/>
              </div>
          </div>
          <div id='calculators' className="hero-image">
            <img src={HeroImg} alt="" />
          </div>
        </div>
    </div>
  );
}

export default Hero;