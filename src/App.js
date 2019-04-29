import React, { Component } from 'react';
import logo from './flash.svg';
import './App.css';
import toast from 'toasted-notes';
import 'toasted-notes/src/styles.css';
import Profile from './Profile.js';
import Calculator from './Calculator.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name : 'Mickey Mouse',
      color : 'Merah',
      img   : 'merah.jpg',
      nilai1 : null,
      nilai2 : null,
      operator : null,
      hasil : null
    }
    toast.notify("Assalamualaikum people", {
      duration: 3000, position: 'top'
    });
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

info(name){
  if(name == 'Calculator'){
    //display calculator
    return<Calculator/>;
      } else if(name == "Profile"){
    //display menu profile
    return <h2><Profile nama="Rapunzel"/></h2>;
  }else {
    //display default
    return(
      <div>
      This is <span className={"selected " +this.state.color}>
          {this.state.name}</span> <br/> <br/>

        <img src={this.state.img} width="400"></img>
      {/*{this.menusaya()} */}
      </div>
    );
  }
}

  clicked (menu){
    //untuk memperbarui state sesuai dengan menu yang dipilih
   this.setState({
     name: menu.name,
     color : menu.color,
       img   : menu.img,
   });
  }

  // handleSumbit(e){
  //   e.preventDefault();

  //   const nilai1 = parseInt(this.refs.nilai1.value);
  //   const nilai2 = parseInt(this.refs.nilai2.value);
  //   const operator = this.refs.operator.value;

  //   var hasil;
  //   switch(operator){
  //     case '+':
  //     hasil = nilai1 + nilai2;
  //     break;
  //     case '-':
  //     hasil = nilai1 - nilai2;
  //     break;
  //     case '*':
  //     hasil = nilai1 * nilai2;
  //     break;
  //     case '/':
  //     hasil = nilai1 / nilai2;
  //     break;
  //   }

  //   this.setState({nilai1, nilai2, operator, hasil});

  //   this.refs.nilai1.value = null;
  //   this.refs.nilai2.value=  null;
  // }

  /*menusaya(){
    var gambar;
    if(this.state.active.toLocaleLowerCase() === 'merah'){
      gambar = "merah";
    } else if(this.state.active.toLocaleLowerCase() === 'kuning'){
      gambar = "kuning";
    } else if(this.state.active.toLocaleLowerCase() === 'hijau'){
      gambar = "hijau";
    } else if(this.state.active.toLocaleLowerCase() === 'biru'){
      gambar = "biru";
    } 

    return <img src={gambar+".jpg"} width="200"></img>
  }*/
  
  render() {
    return (
      <div id="App">
      {/*map akan loop sebanyak menu yang di definisikan */}
      {/*kemudian mengembalikan elemen <a/> */}
      <nav className="nav">{this.props.items.map((menu, index)  => {
          var style = 'menu';
          if (this.state.color === menu.color) {
            style = `${style} is-active`;
          } 
      return <div
           className={style+" "+menu.color}
          //bind untuk membuat 'menu' bisa dikirim ke fungsi 'clicked' 
          onClick={this.clicked.bind(this, menu)}
          key={index}>
          {menu.name}
        </div>;
        }) }
      </nav>

        <div className="info">
        {this.info(this.state.name)}
        <div>
      
        </div>
      </div>
  </div>
        
    );
  }   
} 

export default App;
