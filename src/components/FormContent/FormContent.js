import React from 'react'
import Test1 from '../Test1/Test1'
import Test2 from '../Test2/Test2'

import './FormContent.css'

const FormContent = (props) => {

  return (
    <div className="form-content">
      
      <Test1 activeTab={props.activeTab} count='1' />

      <Test2 activeTab={props.activeTab} count='2' />

    </div>
  )
}

export default FormContent
