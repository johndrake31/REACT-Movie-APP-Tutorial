import React, { Component } from 'react';
import MovieRow from './components/Row';

import './App.css';


class App extends Component {
  render() {
    return (
      <main className="container" >
        <MovieRow />
      </main>
    );
  }
}

export default App;
