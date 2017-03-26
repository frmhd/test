import React from 'react'

import './Test5.css'

const Test5 = (props) => {

  let testClass = props.activeTab.toString() === props.count ? 'visible' : 'hidden'

  // нагуглил
  const Singleton = (function () {
    let instance

    return function Construct_singletone () {
      if (instance) {
        return instance;
      }
      if (this && this.constructor === Construct_singletone) {
        instance = this
      } else {
        return new Construct_singletone()
      }
    }
  }());

  var a = new Singleton();
  var b = new Singleton();
  var c = Singleton();
  console.log(a === b, a === c, b === c); // true
  console.log(a instanceof Singleton);    // true
  console.log(b instanceof Singleton);    // true

  return (
    <div className={testClass}>
      <pre>
        <code>
          {`// нагуглил
          const Singleton = (function () {
            let instance

            return function Construct_singletone () {
              if (instance) {
                return instance;
              }
              if (this && this.constructor === Construct_singletone) {
                instance = this
              } else {
                return new Construct_singletone()
              }
            }
          }());

          var a = new Singleton();
          var b = new Singleton();
          var c = Singleton();
          console.log(a === b, a === c, b === c); // true
          console.log(a instanceof Singleton);    // true
          console.log(b instanceof Singleton);    // true`}
        </code>
      </pre>
    </div>
  )
}

export default Test5
