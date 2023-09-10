import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function Layout(props) {
    return (
        <>
            <Header t={props.t} changeLanguages={props.changeLanguages} />
            <Outlet />
            <Footer t={props.t} />
        </>
    );
}

export default Layout;