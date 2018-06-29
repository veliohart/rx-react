import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleForm from './components/SimpleForm';
import {
  CounterWithPersonLoader
} from './streams/compose';

const App = (props) => (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{props.text}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div>
          <SimpleForm text={props.text}/>
        </div>

        <div>
          <CounterWithPersonLoader />
        </div>
      </div>
    );

export default App;
