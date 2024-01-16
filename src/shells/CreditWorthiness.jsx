import React from 'react';
import './CreditWorthiness.scss';
import speed from '../assets/img/speed.svg';
import calc from "../assets/img/calc.svg";
import { whitelists } from '../i18n';
import { NavLink, useMatch } from 'react-router-dom';

function CreditWorthiness(props) {
  const match = useMatch('/:lang/*');

  let lang = match && match.params ? (whitelists.includes(match.params.lang) ? match.params.lang : null) : null;

  const creditWorthinessPageLink = lang ? `/${lang}/CreditWorthinessPage` : '/CreditWorthinessPage';
  const saveCredit = lang ? `/${lang}/SaveCredit` : '/SaveCredit';

  return (
    <div className="creditWorthiness">
      <div className="creditWorthiness-content">
        <div className="creditWorthiness-capture">
          {props.t("creditWorthiness_capture")}
          <span> {props.t("creditWorthiness_capture_span")}</span>
        </div>
        <div className="creditWorthiness-buttons">

          <NavLink to={creditWorthinessPageLink} target='_blank'>
            <div className="vidget-link">
              <div className="vidget-link-img">
                <img src={speed} alt="speed" />
              </div>
              <div className="vidget-link-text">
                {props.t("creditWorthiness_button_CreditWorthiness")}
              </div>
            </div></NavLink>
          {/* <NavLink to={saveCredit}  target='_blank'>
            <div className="vidget-link">
              <div className="vidget-link-img">
                <img src={calc} alt="speed" />
              </div>
              <div className="vidget-link-text">
              {props.t( "creditWorthiness_button_save_credit")}
              </div>
            </div>
          </NavLink>*/}
        </div>
      </div>
    </div>
  );
}

export default CreditWorthiness;