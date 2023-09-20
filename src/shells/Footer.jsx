import React from 'react';
import './Footer.scss';
import FooterLogo from '../assets/img/HeaderLogo.svg';

import ScrollToTop from '../components/ScrollToTop';
import { HashLink } from 'react-router-hash-link';
import { whitelists } from '../i18n';
import { Link, useMatch } from 'react-router-dom';
import logoInst from '../assets/img/logoInst.svg';
import logoFb from '../assets/img/logoFb.svg';
import logoLkdn from '../assets/img/logoLkdn.svg';

function Footer(props) {
  const match = useMatch('/:lang/*');

  let lang = match && match.params ? (whitelists.includes(match.params.lang) ? match.params.lang : null) : null;

  const privacyLink = lang ? `/${lang}/privacy` : '/privacy';
  const homeLink = lang ? `/${lang}` : 'ru';

  const links = [
    {
      img: logoInst,
      link: 'https://www.instagram.com/hipoteka.expert.pl/?igshid=MWZjMTM2ODFkZg%3D%3D'
    },
    {
      img: logoFb,
      link: 'https://www.facebook.com/hipotekaexpertpl'
    },
    {
      img: logoLkdn,
      link: '#'
    },

  ];

  const linkItem = links.map((item) => (
    <div key={item.link} className="social-link-item-content" >
      <div className="social-img" >
        <a href={item.link} target="blank">
          <img src={item.img} alt="" />
        </a>
      </div>
    </div>
  ))

  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-top-content">
          <div className='links-and-logo-wrapper'>
            <Link to={homeLink}>
              <img src={FooterLogo} alt="header logo" />
            </Link>
            <div className="social-links-wrapper" >
              {linkItem}
            </div>
          </div>
          <div className="footer-nav">
            <ul>
              <li> <HashLink to={`${lang ? `/${lang}/#calculators` : `/#calculators`}`} smooth>{props.t("header_nav2")}</HashLink></li>
              <li> <HashLink to={`${lang ? `/${lang}/#about` : `/#about`}`} smooth>{props.t("header_nav3")}</HashLink></li>
              <li> <a href='https://www.finexp.pl/' target='blank'>{props.t("header_nav1")}</a></li>
              <li> <HashLink to={`${lang ? `/${lang}/#advantages` : `/#advantages`}`} smooth>{props.t("header_nav4")}</HashLink></li>
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