import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Home from './components/home.js';
import People from './components/people';
import Projects from './components/projects';
class App extends React.Component{
  render(){
    return (
      <div>
      
      <Home/>
    </div>
     
    )
  }
}


export default App;
