import React from 'react';
import './PopUpForm.scss';
import Form from './Form';

function PopUpForm(props) {
  return (
    <div className="main-form-wrapper">
        <div className="main-form-content">
            <div className="main-form-form">
              {props.child}
           
            </div>
            
        </div>
    </div>
  );
}

export default PopUpForm;