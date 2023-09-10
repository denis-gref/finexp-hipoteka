import React from 'react';
import './LanguageSelector.scss';
import { useState, useEffect } from "react";
import useOutsideAlerter from './useOutsideAlerter';
import Planet from'../assets/img/planet.png';
import { Link, useLocation, useMatch } from 'react-router-dom';
import { generateLanguage } from '../i18n';
import { whitelists } from '../i18n';

const LanguageSelector = (props) => {
  const [ref,isShow,setIsShow] = useOutsideAlerter(false);

    const location = useLocation();
    const match = useMatch('/:lang/*');

    let lang = match && match.params ? 
    (whitelists.includes(match.params.lang) ? match.params.lang : null) : null ;

    const disolayLang = lang ? lang : 'ru';

    const [currentLanguage, setCurrentLanguage] = useState(disolayLang.toLocaleUpperCase());
    
    const setLanguage = (language) => {
      setCurrentLanguage(language.toUpperCase());
      props.onLanguageChange(language.toLowerCase());
      setIsShow(false);
    }
    
    const langauges = ['PL', 'EN', 'UA', 'RU'];
    const avalibleOption = langauges
      .filter(i => i !== currentLanguage)
      .map(i => <Link className="language-button" key={i} to={generateLanguage(i.toLocaleLowerCase(), location)} onClick={()=>{
        setLanguage(i);
        
        }}>{i}</Link>)
    return (
      <div ref={ref}>
        <div className="language-wrapper">
          <div className="current-language">
            <img src={Planet} alt="" />
            <button  className="language-button" onClick={() => setIsShow(!isShow)}>{currentLanguage}</button>
          </div>
        {isShow ? 
        <div className="button-group">
           {avalibleOption} 
           </div> : <></>}
        </div>
      </div>
    );
  };
  
  export default LanguageSelector;