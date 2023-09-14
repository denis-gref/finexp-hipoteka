import React from 'react';
import './Success.scss';
import success from '../../assets/img/success.svg';

function Success(props) {


  return (
    <div className="success">
      <div className="success-content">
        <div className="success-img">
          <img src={success} alt="success" />
        </div>
        <div className="success-capture">
          {props.t("success_form_capture")}
        </div>
        <div className="success-description">
        {props.t("success_form_description")}
        </div>
          <div className="link-go-back" onClick={() => {
            props.handlerSelectModal();
            props.defaulModalHandler();
            }}>
          {props.t("success_form_link")}
          </div>
      </div>
    </div>
  );
}

export default Success;