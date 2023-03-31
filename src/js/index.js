//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

// include your styles into the webpack bundle
import "../styles/index.css";

function SimpleCounter(props) {
  return (
    <div className="bigCounter">
      <div className="seconds-6">{props.digitSix % 10}</div>
      <div className="seconds-5">{props.digitFive % 10}</div>
      <div className="seconds-4">{props.digitFour % 10}</div>
      <div className="seconds-3">{props.digitThree % 10}</div>
      <div className="seconds-2">{props.digitTwo % 10}</div>
      <div className="seconds-1">{props.digitOne % 10}</div>
    </div>
  );
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
let six = 0,
  five = 0,
  four = 0,
  three = 0,
  two = 0,
  one = 0;

setInterval(function () {
  six = Math.floor(counter / 100000) % 10;
  five = Math.floor(counter / 10000) % 10;
  four = Math.floor(counter / 1000) % 10;
  three = Math.floor(counter / 100) % 10;
  two = Math.floor(counter / 10) % 10;
  one = Math.floor(counter / 1) % 10;
  console.log(six, five, four, three, two, one);
  counter++;

  ReactDOM.render(
    <SimpleCounter
      digitOne={one}
      digitTwo={two}
      digitThree={three}
      digitFour={four}
      digitFive={five}
      digitSix={six}
    />,
    document.querySelector("#app")
  );
}, 1000);
