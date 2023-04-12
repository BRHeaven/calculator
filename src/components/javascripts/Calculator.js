import React, { Component } from "react";

export default class Calculator extends Component {
    state = {
        object : {
            calculationA : 0,
            calculationB : 0,
            result : 0
        }
    };

  render() {
    return <section className="calculator">
        <div className="show">
            <p className="numbers">50 + 50 + 50</p>
            <p className="result">{this.state.object.result}</p>
        </div>
        <div className="interact">
            <div><p>ce</p></div>
            <div><p><i className="fa-solid fa-c"></i></p></div>
            <div><p><i className="fa fa-backspace"></i></p></div>
            <div><p><i className="fa-solid fa-divide"></i></p></div>
            <div className="buttonBlack"><p>7</p></div>
            <div className="buttonBlack"><p>8</p></div>
            <div className="buttonBlack"><p>9</p></div>
            <div><p><i className="fa-solid fa-xmark"></i></p></div>
            <div className="buttonBlack"><p>4</p></div>
            <div className="buttonBlack"><p>5</p></div>
            <div className="buttonBlack"><p>6</p></div>
            <div><p>-</p></div>
            <div className="buttonBlack"><p>1</p></div>
            <div className="buttonBlack"><p>2</p></div>
            <div className="buttonBlack"><p>3</p></div>
            <div><p>+</p></div>
            <div></div>
            <div className="buttonBlack"><p>0</p></div>
            <div><p>.</p></div>
            <div><p>=</p></div>
        </div>
    </section>;
  }
}
