import React from 'react'

import './Test1.css'

const Test1 = (props) => {

  let testClass = props.activeTab.toString() === props.count ? 'visible' : 'hidden'

  return (
    <div className={testClass}>
      <p>Здесь я всю голову сломал как мне отодвинуть цифру от круга, как это сделать без дополнительных элементов не придумал.</p>
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
