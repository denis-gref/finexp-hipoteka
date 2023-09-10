import React from 'react';
import './HeaderNav.scss';
import ImgBouhalteria from '../assets/img/buhalteryLogo.svg';
import { HashLink } from 'react-router-hash-link';
import { useMatch } from 'react-router-dom';
import { whitelists } from '../i18n';

function HeaderNav(props) {

    const match = useMatch('/:lang/*');

    let lang = match && match.params ? (whitelists.includes(match.params.lang) ? match.params.lang : null) : null;

    return (
        <div className="headerNav">
            <ul>
                <li><a href="https://www.finexp.pl/" target='blank'>
                    <img src={ImgBouhalteria} alt="logo" />
                    {props.t("header_nav1")}
                </a>
                </li>
                <li>
                    <HashLink  to={`${lang ? `/${lang}/#calculators`: `/#calculators`}`} smooth>{props.t("header_nav2")}</HashLink>
                </li>
                <li>
                    <HashLink  to={`${lang ? `/${lang}/#about`: `/#about`}`} smooth>{props.t("header_nav3")}</HashLink>
                </li>
                <li>
                    <HashLink to={`${lang ? `/${lang}/#advantages`: `/#advantages`}`} smooth>{props.t("header_nav4")}</HashLink>
                </li>
            </ul>
        </div>
    );
}

export default HeaderNav;