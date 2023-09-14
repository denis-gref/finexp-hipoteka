import React from 'react';
import './Footer.scss';
import FooterLogo from '../assets/img/HeaderLogo.svg';

import ScrollToTop from '../components/ScrollToTop';
import { HashLink} from 'react-router-hash-link';
import { whitelists } from '../i18n';
import { Link, useMatch } from 'react-router-dom';

function Footer(props) {
  const match = useMatch('/:lang/*');

  let lang = match && match.params ? (whitelists.includes(match.params.lang) ? match.params.lang : null) : null;

  const privacyLink = lang ? `/${lang}/privacy` : '/privacy'; 
  const homeLink = lang ? `/${lang}` : 'ru'; 

  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-top-content">
          <Link to={homeLink}>
            <img src={FooterLogo} alt="header logo" />
          </Link>
          <div className="footer-nav">
            <ul>
              <li> <HashLink  to={`${lang ? `/${lang}/#calculators`: `/#calculators`}`} smooth>{props.t("header_nav2")}</HashLink></li>
              <li> <HashLink  to={`${lang ? `/${lang}/#about`: `/#about`}`} smooth>{props.t("header_nav3")}</HashLink></li>
              <li> <a href='https://www.finexp.pl/' target='blank'>{props.t("header_nav1")}</a></li>
              <li> <HashLink to={`${lang ? `/${lang}/#advantages`: `/#advantages`}`} smooth>{props.t("header_nav4")}</HashLink></li>
            </ul>
          </div>
          <div className="footer-adress">
            <div className="top">
                Finance Expert Sp. z o.o.
                ul. Kuźnicza 10/3 piętro
                50-529 Wrocław <br />
                NIP: 8971906842
            </div>
            <div className="bottom">
              <div className="tel"><a href='tel: +48 511 743 822'> +48 511 743 822</a></div>
              <div className='mail-link'><a href="mailto:hipoteka@finexp.pl">hipoteka@finexp.pl</a></div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="link-policy">
            <Link to={privacyLink}>{props.t("Privacy_link")}</Link>
          </div>
          <div className="copyright">
            © 2023 | All rights reserved
          </div>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
}

export default Footer;