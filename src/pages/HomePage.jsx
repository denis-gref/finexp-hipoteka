import React from 'react';
import Hero from '../shells/Hero';
import CreditWorthiness from '../shells/CreditWorthiness';
import About from '../shells/About';
import Advantages from '../shells/Advantages';
import Offer from '../shells/Offer';


function HomePage(props) {
    return (

        <>
            <Hero t={props.t} handlerSelectModal={props.handlerSelectModal}/>
            <CreditWorthiness t={props.t}/>
            <About t={props.t}/>
            <Advantages t={props.t}/>
            <Offer t={props.t} handlerSelectModal={props.handlerSelectModal} />
        </>
    );
}

export default HomePage;