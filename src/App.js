import React, { Component } from 'react';
import frown from './frown.png';
import style from './App.module.css';

class App extends Component {
  render() {
    return (
      <div className={style.wrapper}>
        <header className={style.header}>
          <img src={frown} className={style.logo} alt="Shinyoung frowning" />
          <h1 className={style.title}>Welcome to Shinyoung's personal site</h1>
        </header>
        <p className={style.intro}>
          It is under construction.
        </p>
      </div>
    );
  }
}

export default App;
