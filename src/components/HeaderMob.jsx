import React from 'react';
import './HeaderMob.scss';
import Burger from '../assets/img/burger.svg';
import HeaderMobLogo from '../assets/img/mobLogo.svg';
import OutsideHook from './OutsideHook';
import { useState, useEffect } from "react";
import close from '../assets/img/mobClose.svg';
import ImgBouhalteria from '../assets/img/mobBuh.svg';
import girl from '../assets/img/consultationGirl.png';
import { HashLink } from 'react-router-hash-link';
import { Link, useLocation, useMatch } from 'react-router-dom';
import { generateLanguage } from '../i18n';
import { whitelists } from '../i18n';


function HeaderMob(props) {

    const [ref, isShow, setIsShow] = OutsideHook(false);

    const location = useLocation();
    const match = useMatch('/:lang/*');

    let lang = match && match.params ?
        (whitelists.includes(match.params.lang) ? match.params.lang : null) : null;


    const disolayLang = lang ? lang : 'ru';

    const [currentLanguage, setCurrentLanguage] = useState(disolayLang.toLocaleUpperCase());

    const setLanguage = (language) => {
        setCurrentLanguage(language.toUpperCase());
        props.onLanguageChange(language.toLowerCase());
        setIsShow(false);
    }

    const dropMenu = () => {
        setIsShow(!isShow);
    };

    useEffect(() => {
        const html = document.querySelector("html");
        if (html) {
            html.style.overflow = isShow ? "hidden" : "auto";
        }
    }, [isShow]);

    const langauges = ['PL', 'EN', 'UA', 'RU'];
    const avalibleOption = langauges
        .filter(i => i !== currentLanguage)
        .map(i => <Link className="mob-language-item" key={i} to={generateLanguage(i.toLocaleLowerCase(), location)} onClick={() => {
            setLanguage(i);

        }}>{i}</Link>)

    return (
        <div className="header-mob" ref={ref}>
            <div className="header-mob-content">
                <div className="header-mob-img" >
                    <img src={HeaderMobLogo} alt="mob-logo" />
                </div>
                <div className="burger-menu" onClick={() => {
                    dropMenu();
                }}>
                    <img src={isShow ? close : Burger} alt="burger" />
                </div>
            </div>
            {isShow &&
                <div className="drop-block">
                    <div className="language-wrapper">
                        {avalibleOption}
                    </div>
                    <div className="header-mob-nav">
                        <ul>
                            <li><a href="https://www.finexp.pl/" target='blank'><img src={ImgBouhalteria} alt='logo'></img> {props.t("header_nav1")}</a></li>
                            <li><HashLink to='/#calculators' smooth>Калькуляторы</HashLink></li>
                            <li><HashLink to='/#about' smooth>О нас</HashLink></li>
                            <li><HashLink to='/#advantages' smooth>Преимущества</HashLink></li>
                        </ul>
                    </div>
                    <div className="header-mob-green-block">
                        <div className="header-mob-girl">
                            <img src={girl} alt="girl" />
                        </div>
                        <div className="header-mob-text-wrapper">
                            <div className="header-mob-capture">
                                Бесплатная консультация
                            </div>
                            <div className="header-mob-description">
                                <a href='tel: +48 511 743 822'> +48 511 743 822</a>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default HeaderMob;