import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CreateUsers from './CreateUsers/CreateUsers';
import FormUsers from './FormUsers/FormUsers';

class App extends Component {
  render() {
    return(
      <div className="App">
        <FormUsers
        options={[ 'Perú', 'Colombia','Ecuador','Argentina','Chile','Venezuela','Brasil','Bolivia' ]}
        />
        <CreateUsers/>
      </div>
    );
  }
}

export default App;
