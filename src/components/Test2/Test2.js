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
      <div className="block2-float">
        <div className="block2-float__child">1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam, architecto aspernatur aut cumque dolorum est, et excepturi facilis, ipsam itaque natus nihil odio rem sed ut vel veritatis voluptatum?</div>
        <div className="block2-float__child">2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam, architecto aspernatur aut cumque dolorum est, et excepturi facilis, ipsam itaque natus nihil odio rem sed ut vel veritatis voluptatum?</div>
        <div className="block2-float__child">3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam, architecto aspernatur aut cumque dolorum est, et excepturi facilis, ipsam itaque natus nihil odio rem sed ut vel veritatis voluptatum?</div>
        <div className="block2-float__child">4 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam, architecto aspernatur aut cumque dolorum est, et excepturi facilis, ipsam itaque natus nihil odio rem sed ut vel veritatis voluptatum?</div>
        <div className="block2-float__child">5 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam, architecto aspernatur aut cumque dolorum est, et excepturi facilis, ipsam itaque natus nihil odio rem sed ut vel veritatis voluptatum?</div>
        <div className="block2-float__child">6 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam, architecto aspernatur aut cumque dolorum est, et excepturi facilis, ipsam itaque natus nihil odio rem sed ut vel veritatis voluptatum?</div>
      </div>
    </div>
  )
}

export default Test2
