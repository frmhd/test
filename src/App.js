import React, { Component } from 'react'

import Form from './components/Form/Form'

import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <h2>Тестовое задание для</h2>
          <img src='https://author24.ru/assets/img/logo.svg' className='App-logo' alt='logo' />
        </div>
        <Form />
      </div>
    )
  }
}

export default App
