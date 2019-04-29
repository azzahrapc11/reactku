import React, { Component } from 'react';
import './App.css';
import toast from 'toasted-notes';
import 'toasted-notes/src/styles.css';

class Profile extends Component{                                                                                                                                                                                                                                                                                                                                                                                                                                 
  constructor(props){
    super(props);
  }
  notify(){
    toast.notify("Bonjour Rapunzel", {
      duration: 3000, position: 'top-left'
    });
  }
  render() {
    return (
      <div>
      <button onClick={this.notify}>Press Me!</button>
      <p>{this.props.nama}</p>
      <img src="tangled.jpg" width="800px"/>
      </div>
    );
  }   
} 

export default Profile;
