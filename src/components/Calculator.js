/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import './calculator.css';

class Calculator extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="container">
          <div className="item display">0</div>
          <div className="item AC">AC</div>
          <div className="item operations">+/-</div>
          <div className="item procentage">%</div>
          <div className="item divide operation">÷</div>
          <div className="item seven">7</div>
          <div className="item eight">8</div>
          <div className="item nine">9</div>
          <div className="item multiply operation">×</div>
          <div className="item four">4</div>
          <div className="item five">5</div>
          <div className="item six">6</div>
          <div className="item minus operation">-</div>
          <div className="item one">1</div>
          <div className="item two">2</div>
          <div className="item three">3</div>
          <div className="item plus operation">+</div>
          <div className="item zero">0</div>
          <div className="item period">.</div>
          <div className="item equal operation">=</div>
        </div>
      </div>
    );
  }
}

export default Calculator;
