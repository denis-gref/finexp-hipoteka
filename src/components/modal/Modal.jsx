import React from "react";
import './Modal.scss';
import close from '../../assets/img/close.svg'
import ReactDOM from 'react-dom';
import { useEffect } from "react";

const Modal = ({active, setActive, children,handlerSelectModal }) => {
    useEffect(() => {
        const html = document.querySelector("html");
        if (html) {
          html.style.overflow = active ? "hidden" : "auto";
        }
      }, [active]);

    return ReactDOM.createPortal(
        <div className={active ? 'modal active' : 'modal'} onClick={() => {
          setActive(false);
          }} >
            <div className={active ? 'modal-content active' : 'modal-content'} onClick={e => e.stopPropagation()} >
                    <div className="close" onClick={() => {
                      setActive(false);
                      handlerSelectModal();
                      }}><img src={close} alt="" /></div>
                    {children}                
            </div>
        </div>,
        document.getElementById('portal')
    );
}


export default Modal;