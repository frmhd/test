import React, { Component } from 'react'
import TestTabs from '../TestTabs/TestTabs'
import FormContent from '../FormContent/FormContent'

import './Form.css'

class Form extends Component {
  constructor (props) {
    super (props)
    this.state = {
      activeTest: ''
    }

    this.changeActiveTab = this.changeActiveTab.bind(this)
  }

  componentDidMount () {
    this.setState (
      this.changeActiveTab (1)
    )
  }

  changeActiveTab (tabCount) {
    this.setState ({ activeTest: tabCount })
  }

  render () {
    return (
      <div className="form">
        <TestTabs
          activeTab={this.state.activeTest}
          changeActiveTab={this.changeActiveTab} />

        <FormContent activeTab={this.state.activeTest} />
      </div>
    )
  }
}

export default Form
