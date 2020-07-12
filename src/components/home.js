import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Repositories from './repositories';
import Header from './header';
import './../styles/home.css';
class Home extends Component {
  render() {
    return (
  
       <div class="wrapper">
       
                <Header/>
                <div>
                <Repositories/>
                </div>
                </div>
    )
  }
}

export default Home;