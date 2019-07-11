import React, { Component } from 'react'

import Nav from './Components/Nav'
import { HashRouter } from 'react-router-dom'
import router from './router'

import './App.css';

export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <Nav />
         {router}
      </HashRouter>
    )
  }
}