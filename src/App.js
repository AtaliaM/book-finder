import React from 'react';
import './App.css';
import googleApi from './apis/googleApi';
import logo from './logo.png';
import SearchPage from './components/SearchPage/SearchPage';

class App extends React.Component {

  async componentDidMount() {
    const res = await googleApi.get(`pride and prejudice`);
    console.log(res.data);
  }

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
