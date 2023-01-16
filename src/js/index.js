//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

// include your styles into the webpack bundle
import "../styles/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { ProgressPlugin } from "webpack";

function SimpleCounter(props) {
  return <div className="bigCounter">
      <div className="clock">
        <FontAwesomeIcon icon={faClock} />
      </div>
      <div className="seconds-6">{props.digitSix % 10}</div>
      <div className="seconds-5">{props.digitFive % 10}</div>
      <div className="seconds-4">{props.digitFour % 10}</div>
      <div className="seconds-3">{props.digitThree % 10}</div>
      <div className="seconds-2">{props.digitTwo % 10}</div>
      <div className="seconds-1">{props.digitOne % 10}</div>
    </div>
}

SimpleCounter.propTypes = {
  digitSix: PropTypes.number,
  digitFive: PropTypes.number,
  digitFour: PropTypes.number,
  digitThree: PropTypes.number,
  digitTwo: PropTypes.number,
  digitOne: PropTypes.number,
};

let counter = 0;
setInterval(function () {
  const six = Math.floor(counter / 100000);
  const five = Math.floor(counter / 10000);
  const four = Math.floor(counter / 1000);
  const three = Math.floor(counter / 100);
  const two = Math.floor(counter / 10);
  const one = Math.floor(counter / 1);
  console.log(six, five, four, three, two, one)
  counter++;
  //render your react application
}, 1000);

ReactDOM.render(
  <SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} digitFive={five} digitSix={six} />,
  document.querySelector("#app")
);
