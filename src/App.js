import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SearchPage from './components/SearchPage/SearchPage';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header/>
        <SearchPage/>
      </div>
    );
  }
}

export default App;
