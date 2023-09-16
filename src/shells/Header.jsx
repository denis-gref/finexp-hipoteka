import React from 'react';
import './Header.scss';
import HeaderLogo from '../assets/img/HeaderLogo.svg';
import HeaderNav from '../components/HeaderNav';
import LanguageSelector from '../components/LanguageSelector';
import girlImg from '../assets/img/consultationGirl.svg';
import { whitelists } from '../i18n';
import { Link, useMatch } from 'react-router-dom';
import HeaderMob from '../components/HeaderMob';

function Header(props) {
  const match = useMatch('/:lang/*');

  let lang = match && match.params ? (whitelists.includes(match.params.lang) ? match.params.lang : null) : null;

  const homeLink = lang ? `/${lang}` : 'ru'; 

  return (
    <>

      <div className="header">
        <div className="header-content">
          <div className="logo">
            <Link to={homeLink}>
              <img src={HeaderLogo} alt="header logo" />
            </Link>
          </div>
          <HeaderNav t={props.t} />
          <div className='header-language-and-consultation' >
            <div className="selector-wrapper">
            <LanguageSelector onLanguageChange={(lange)=>props.changeLanguages(lange)} />
            </div>
          
          <div className="header-consultation-card">
            <div className="header-card-content">
              <div className="header-card-img">
                <img src={girlImg} alt="girl" />
              </div>
              <div className="header-card-text-wrapper">
                <div className="header-card-text">
                  {props.t("header_consultation")}
                </div>
                <div className="header-card-phone">
                  <a href='tel: +48 511 743 822'> +48 511 743 822</a>
                </div>
              </div>
            </div>
          </div>
          </div>
          
        </div>

      </div>
      <HeaderMob t={props.t} />
    </>
  );
}

export default Header;