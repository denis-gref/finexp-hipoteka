import React from 'react';
import "./NotFoundPage.scss";
import NotFoundImg from '../assets/img/404.svg';
import { Link } from 'react-router-dom';

function NotFoundPage(props) {
    return (
        <div className="not-found-page">
            <div className="not-found-page-content">
                <div className="not-found-page-img">
                    <img src={NotFoundImg} alt="404" />
                </div>
                <div className="not-found-page-text">
                    <div className="not-found-page-capture">
                    Coś poszło nie tak
                    </div>
                    <div className="not-found-page-description">
                    Nie można znaleźć strony, której szukasz
                    </div>
                    <Link to='/'>
                        <div className="link-go-back">
                        Powrót na stronę główną
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NotFoundPage;