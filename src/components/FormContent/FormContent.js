import React from 'react'
import Test1 from '../Test1/Test1'
import Test2 from '../Test2/Test2'
import Test3 from '../Test3/Test3'
import Test4 from '../Test4/Test4'
import Test5 from '../Test5/Test5'

import './FormContent.css'

const FormContent = (props) => {

  return (
    <div className="form-content">

      <Test1 activeTab={props.activeTab} count='1' />

      <Test2 activeTab={props.activeTab} count='2' />

      <Test3 activeTab={props.activeTab} count='3' />

      <Test4 activeTab={props.activeTab} count='4' />

      <Test5 activeTab={props.activeTab} count='5' />

    </div>
  )
}

export default FormContent
