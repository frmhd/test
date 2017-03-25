import React from 'react'

const Test2 = (props) => {

  let testClass = props.activeTab.toString() === props.count ? 'visible' : 'hidden'

  return (
    <h1 className={testClass}>Test2</h1>
  )
}

export default Test2
