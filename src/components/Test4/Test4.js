import React from 'react'

import './Test4.css'

const Test4 = (props) => {

  let testClass = props.activeTab.toString() === props.count ? 'visible' : 'hidden'

  return (
    <div className={testClass}>
      <div className="block3">
        <div className="block3__child">50%</div>
        <div className="block3__child">50%</div>
      </div>
      <div className="block3">
        <div className="block3__child">33.33%</div>
        <div className="block3__child">33.33%</div>
        <div className="block3__child">33.33%</div>
      </div>
      <div className="block3">
        <div className="block3__child">25%</div>
        <div className="block3__child">25%</div>
        <div className="block3__child">25%</div>
        <div className="block3__child">25%</div>
      </div>
      <div className="block3">
        <div className="block3__child">20%</div>
        <div className="block3__child">20%</div>
        <div className="block3__child">20%</div>
        <div className="block3__child">20%</div>
        <div className="block3__child">20%</div>
      </div>
    </div>
  )
}

export default Test4
