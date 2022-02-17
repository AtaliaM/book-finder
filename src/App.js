import React from 'react';
import './App.css';
import googleApi from './apis/googleApi';

class App extends React.Component {

  async componentDidMount() {
    const res = await googleApi.get(`pride and prejudice`);
    console.log(res.data);
  }

  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
