import React from 'react'

import './Test3.css'

const Test3 = (props) => {

  let testClass = props.activeTab.toString() === props.count ? 'visible' : 'hidden'

  let value

  if (document.documentElement.lang === "en") {
    value = '$ 99.99'
  } else {
    value = '99.99 Р'
  }

  return (
    <div className={testClass}>
      <div className="value">{value}</div>
    </div>
  )
}

export default Test3
