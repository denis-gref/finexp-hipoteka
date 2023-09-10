import React from 'react';
import './About.scss';
import about from "../assets/img/About.svg";
import { useSpring, animated } from "react-spring";
import { useInView } from 'react-intersection-observer';

function About(props) {
  const { ref, inView } = useInView({
    threshold: 0,
  })

  function Number({ n }) {
    const { number } = useSpring({
      from: { number: 0 },
      number: n,
      delay: 100,
      config: { mass: 1, tension: 25, friction: 10 },
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
  }
  const statisticsContent = [
    {
      title: props.t("numbers1"),
      count: 3
    },
    {
      title: props.t("numbers2"),
      count: 50
    },
    {
      title: props.t("numbers3"),
      count: 500
    }
  ];

  const itemStatistics = statisticsContent.map((item) => (
    <div className="statistics-item-wrapper" key={item.title}>
      <div className="statistics-capture">
        {item.title}
      </div>
      <div  className="values-block">
        {inView && (<div className="value">
          {<Number n={item.count} />}
          <div>+</div>
        </div>)}
      </div>
    </div>
  ))
  return (
    <div ref={ref} id='about' className="about">
      <div className="about-content">
        <div className="about-image">
          <img src={about} alt="about" />
        </div>
        <div className="about-text-content">
          <div className="about-capture">
            {props.t("about_capture")}<span> {props.t("about_capture_span")}</span>
          </div>
          <div className="about-description">
          {props.t("about_description")}
          </div>
          <div className="about-numbers">
            {itemStatistics}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;