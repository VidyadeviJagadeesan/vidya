import { Header, HeaderName } from "carbon-components-react/lib/components/UIShell";
import React, { Component } from 'react';
import logo from './images/logo.png';
import CardsClass from './components/CardsClass';
import CardsHook from './components/CardsHook';
import CardUsingCustomHook from "./components/CardUsingCustomHook";
import { Close32, Share32 } from '@carbon/icons-react';

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      title: 'IBM Platform'
    };
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <Header aria-label={this.state.title}>
            <HeaderName href="#" prefix="">
              <img src={logo} alt="logo" />
            </HeaderName>
          </Header>
        </div>
        <div className="actionBar">
          <Header aria-label='actions'>
            <HeaderName href="#" prefix="">
              <div>
                <a href='#'>
                  Share
                  <Share32 aria-label="Share" className="pl-1 card-icon" />
                </a>
                <span>|</span>
                <a href='#'>
                  Close
                  <Close32 aria-label="Close" className="pl-1 card-icon" />
                </a>
              </div>
            </HeaderName>
          </Header>
        </div>
        <div className="mainContent">
          {/* ***************Class Component************** */}
          {/* <CardsClass /> */}
          {/* ***************Function Hook Component************** */}
          {/* <CardsHook />  */}
          {/* ***************Custom Function Hook Component************** */}
          <CardUsingCustomHook />
        </div>
      </div>
    );
  }
}
