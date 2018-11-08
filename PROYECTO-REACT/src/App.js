import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CreateUsers from './CreateUsers/CreateUsers';
import FormUsers from './FormUsers/FormUsers';

class App extends Component {
  componentDidMount(){
    document.title = "Belatrix-React-Project"
  }
  render() {
    return(
      <div className="App">
        <FormUsers
        options={[ 'Perú', 'Colombia','Ecuador','Argentina','Chile','Venezuela','Brasil','Bolivia' ]}
        genders={['Male', 'Female']}
        />
        <CreateUsers/>
      </div>
    );
  }
}

export default App;
