import React from 'react'

import './anygrid.css'
import './Test2.css'

const Test2 = (props) => {

  let testClass = props.activeTab.toString() === props.count ? 'visible' : 'hidden'

  return (
    <div className={testClass}>
      <h3>На флексах (пофикшено)</h3>
      <div className="block2">
        <div className="block2__child">1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam, architecto aspernatur aut cumque dolorum est, et excepturi facilis, ipsam itaque natus nihil odio rem sed ut vel veritatis voluptatum?</div>
        <div className="block2__child">2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam, architecto aspernatur aut cumque dolorum est, et excepturi facilis, ipsam itaque natus nihil odio rem sed ut vel veritatis voluptatum?</div>
        <div className="block2__child">3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam, architecto aspernatur aut cumque dolorum est, et excepturi facilis, ipsam itaque natus nihil odio rem sed ut vel veritatis voluptatum?</div>
        <div className="block2__child">4 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam, architecto aspernatur aut cumque dolorum est, et excepturi facilis, ipsam itaque natus nihil odio rem sed ut vel veritatis voluptatum?</div>
        <div className="block2__child">5 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam, architecto aspernatur aut cumque dolorum est, et excepturi facilis, ipsam itaque natus nihil odio rem sed ut vel veritatis voluptatum?</div>
        <div className="block2__child">6 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam, architecto aspernatur aut cumque dolorum est, et excepturi facilis, ipsam itaque natus nihil odio rem sed ut vel veritatis voluptatum?</div>
      </div>
      <h3>На флоатах</h3>
      <div className="block2-float g-12">
        <div className="g-row">
          <div className="block2-float__child g-col-1 g-span-4">1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam, architecto aspernatur aut cumque dolorum est, et excepturi facilis, ipsam itaque natus nihil odio rem sed ut vel veritatis voluptatum?</div>
          <div className="block2-float__child g-col-5 g-span-4">2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam, architecto aspernatur aut cumque dolorum est, et excepturi facilis, ipsam itaque natus nihil odio rem sed ut vel veritatis voluptatum?</div>
          <div className="block2-float__child g-col-9 g-span-4">3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam, architecto aspernatur aut cumque dolorum est, et excepturi facilis, ipsam itaque natus nihil odio rem sed ut vel veritatis voluptatum?</div>
        </div>
        <div className="g-row">
          <div className="block2-float__child g-col-1 g-span-4">4 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam, architecto aspernatur aut cumque dolorum est, et excepturi facilis, ipsam itaque natus nihil odio rem sed ut vel veritatis voluptatum?</div>
          <div className="block2-float__child g-col-5 g-span-4">5 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam, architecto aspernatur aut cumque dolorum est, et excepturi facilis, ipsam itaque natus nihil odio rem sed ut vel veritatis voluptatum?</div>
          <div className="block2-float__child g-col-9 g-span-4">6 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam, architecto aspernatur aut cumque dolorum est, et excepturi facilis, ipsam itaque natus nihil odio rem sed ut vel veritatis voluptatum?</div>
        </div>
      </div>
    </div>
  )
}

export default Test2
