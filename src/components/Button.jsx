import React from 'react';
import './Button.scss';

function Button(props) {
  const imageStyle = {
    padding: '0px 10px 0px 0px',
  };
  return (
    <div className="button-component">
      <button className="Button"onClick={() =>
      props.handlerSelectModal()}>
      {props.img && <img src={props.img} alt="img" style={imageStyle} />}
        {props.text}
      </button>

    </div>
  );
}

export default Button;