import React from 'react'

import './Test3.css'

const Test3 = (props) => {

  let testClass = props.activeTab.toString() === props.count ? 'visible' : 'hidden'

  let value

  return (
    <div className={testClass}>
      <div className="value">99.99</div>
    </div>
  )
}

export default Test3
