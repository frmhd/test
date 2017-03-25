import React from 'react'

import './Test1.css'

const Test1 = (props) => {

  let testClass = props.activeTab.toString() === props.count ? 'visible' : 'hidden'

  return (
    <div className={testClass}>
      <div className="block1">
        <div className="block1__child">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium dicta dolor dolorum in laboriosam mollitia?</div>
        <div className="block1__child">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium dicta dolor dolorum in laboriosam mollitia?</div>
        <div className="block1__child">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium dicta dolor dolorum in laboriosam mollitia?</div>
        <div className="block1__child">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium dicta dolor dolorum in laboriosam mollitia?</div>
      </div>
    </div>
  )
}

export default Test1
