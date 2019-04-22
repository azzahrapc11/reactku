import React, { Component } from 'react';
import './App.css';

class Calculator extends Component {
  constructor(props){
    super(props);
    this.state = {
        name : 'Calculator',
        color : 'Pink',
        nilai1 : null,
        nilai2 : null,
        operator : null,
        hasil : null
      }
  }

  renderHasil(){

    const {nilai1, nilai2, operator, hasil} = this.state;

    if (this.state.hasil){
      return (
        <div>
        <p className="alert alert-success">
        {nilai1+operator+nilai2 +'='+hasil}
        </p>
        </div>
      );
    }
  }

  
  render() {
    return(
        <div>
          This is <span className={"selected " +this.state.color}>
          {this.state.name}</span> <br/> <br/>
          <form onSubmit={this.handleSumbit.bind(this)}>
          <br />
          <input type="number" ref="nilai1" className="form-conrol"/> 
          <select ref="operator" className="from-control">
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
          </select>
          <input type="number" ref="nilai2" className="form-conrol"/>
          
          <br/><br/>
          <button className="btn btn-ptimary">Hitung</button>
          </form>
          {this.renderHasil()}
        </div>
      );
  }   


handleSumbit(e){
    e.preventDefault();

    const nilai1 = parseInt(this.refs.nilai1.value);
    const nilai2 = parseInt(this.refs.nilai2.value);
    const operator = this.refs.operator.value;

    var hasil;
    switch(operator){
      case '+':
      hasil = nilai1 + nilai2;
      break;
      case '-':
      hasil = nilai1 - nilai2;
      break;
      case '*':
      hasil = nilai1 * nilai2;
      break;
      case '/':
      hasil = nilai1 / nilai2;
      break;
    }
    this.setState({nilai1, nilai2, operator, hasil});
    this.refs.nilai1.value = null;
    this.refs.nilai2.value=  null;
}
}



export default Calculator;
