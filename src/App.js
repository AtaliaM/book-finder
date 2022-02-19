import React from 'react';
import './App.css';
import logo from './logo.png';
import SearchPage from './components/SearchPage/SearchPage';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <div className="logo"><img className="logo-img" src={logo} alt="logo"/></div>
        <SearchPage/>
      </div>
    );
  }
}

export default App;
