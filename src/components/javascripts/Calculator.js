import React, { Component } from "react";

export default class Calculator extends Component {
  state = {
    number: 0,
    setNumber: 0,
    decimal: false,
    operator: " ",
  };

  inputNumber = (number) => {
    let temp = (document.querySelector("#input").value += number);
    let index = 0;
    for (let i = 0; i < temp.length; i++) {
      if (temp[i] === ".") {
        index++;
      }
    }
    if (index === 2) {
      document.querySelector("#input").value = "";
      for (let i = 0; i < temp.length - 1; i++) {
        document.querySelector("#input").value += temp[i];
      }
    }
    return;
  };

  checkValue = (operator) => {
    let flag = this.state.decimal;
    let number;
    let tempNumber = document.querySelector("#input").value;
    if (flag) {
      number = parseFloat(tempNumber);
    } else {
      number = parseInt(tempNumber);
    }
    let handle = document.querySelector("#numbers").value;
    if (tempNumber === "" && handle === "") {
      document.querySelector("#numbers").value = 0 + " " + operator;
      return;
    }
    if (handle === "") {
      document.querySelector("#numbers").value += number + " " + operator;
      document.querySelector("#input").value = "";
    } else {
      if (tempNumber === '') {
        let valueOld = document.querySelector("#numbers").value;
        let repeatValue = parseFloat(valueOld);
        document.querySelector("#numbers").value = repeatValue + " " + operator;
      } else { 
        this.calculator(number, operator);
      }
    }
  };

  convertNumber = (index) => {
    let number;
    for ( let i = 0; i< index.length; i++ ) {
      if (index[i] === ".") {
        number = parseFloat(index);
        break;
      }
      number = parseInt(index);
    }
    return number;
  }

  calculator = (index, operator) => {
    this.setState({ decimal: false });
    let indexInput = document.querySelector("#numbers").value;
    let value;
    let number = this.convertNumber(indexInput);
    switch (this.state.operator) {
        case "+": 
        value = number + index;
        document.querySelector("#numbers").value = value + " " + operator;
        document.querySelector("#input").value = '';
        break;
        case "-": 
        value = number - index;
        document.querySelector("#numbers").value = value + " " + operator;
        document.querySelector("#input").value = '';
        break;
        case "/": 
        value = number / index;
        document.querySelector("#numbers").value = value + " " + operator;
        document.querySelector("#input").value = '';
        break;
        case "*": 
        value = number * index;
        document.querySelector("#numbers").value = value + " " + operator;
        document.querySelector("#input").value = '';
        break;
        default: 
        return;
    }
  };

  removeValue = () => {
    let value = document.querySelector("#input").value;
    let newValue = "";
    for (let i = 0; i < value.length - 1; i++) {
      newValue += value[i];
    }
    document.querySelector("#input").value = newValue;
  };

  clearEntry = () => {
    document.querySelector("#input").value = '';
  }

  clearAll = () => {
    document.querySelector("#input").value = '';
    document.querySelector("#numbers").value = '';
  }

  result = () => {
    let number = document.querySelector("#numbers").value;
    let inputValue = this.convertNumber(document.querySelector("#input").value);
    let operator = number.slice(-1);
    if (number === '') {
      document.querySelector("#input").value = inputValue;
      return;
    }
    let numberValue = this.convertNumber(number);
    let result = 0;
    switch (operator) {
      case "+": result = numberValue + inputValue; break;
      case "-": result = numberValue - inputValue; break;
      case "*": result = numberValue * inputValue; break;
      case "/": result = numberValue / inputValue; break;
      default: break;
    }
    document.querySelector("#input").value = result;
    document.querySelector("#numbers").value = '';
  }

  render() {
    return (
      <section className="calculator">
        <div className="show">
          <input id="numbers" disabled />
          <input id="input" disabled />
        </div>
        <div className="interact">
          <button onClick={() => {this.clearEntry()}}><p>ce</p></button>
          <button onClick={() => {this.clearAll()}}><p><i className="fa-solid fa-c"></i></p></button>
          <button onClick={() => {this.removeValue();}}><p><i className="fa fa-backspace"></i></p></button>
          <button onClick={() => {this.setState({ operator: "/" });this.checkValue("/");}}><p><i className="fa-solid fa-divide"></i></p></button>
          <button onClick={() => {this.inputNumber(7);}} value={7} className="buttonBlack"><p>7</p></button>
          <button onClick={() => {this.inputNumber(8);}} value={8} className="buttonBlack"><p>8</p></button>
          <button onClick={() => {this.inputNumber(9);}} value={9} className="buttonBlack"><p>9</p></button>
          <button onClick={() => {this.setState({ operator: "*" });this.checkValue("*");}}><p><i className="fa-solid fa-xmark"></i></p></button>
          <button onClick={() => {this.inputNumber(4);}} value={4} className="buttonBlack"><p>4</p></button>
          <button onClick={() => {this.inputNumber(5);}} value={5} className="buttonBlack"><p>5</p></button>
          <button onClick={() => {this.inputNumber(6);}} value={6} className="buttonBlack"><p>6</p></button>
          <button onClick={() => {this.setState({ operator: "-" });this.checkValue("-");}}><p>-</p></button>
          <button onClick={() => {this.inputNumber(1);}} value={1} className="buttonBlack"><p>1</p></button>
          <button onClick={() => {this.inputNumber(2);}} value={2} className="buttonBlack"><p>2</p></button>
          <button onClick={() => {this.inputNumber(3);}} value={3} className="buttonBlack"><p>3</p></button>
          <button onClick={() => {this.setState({ operator: "+" });this.checkValue("+");}}><p>+</p></button>
          <button onClick={() => {}}></button>
          <button onClick={() => {this.inputNumber(0);}} className="buttonBlack"><p>0</p></button>
          <button onClick={() => {this.setState({ decimal: true });this.inputNumber(".");}}><p>.</p></button>
          <button onClick={() => {this.result()}}><p>=</p></button>
        </div>
      </section>
    );
  }
}
