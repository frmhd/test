import React from 'react'
import TabsItem from '../TabsItem/TabsItem'

import './TestTabs.css'

const TestTabs = (props) => {

  let tabsRow = []
  for (var i = 1; i <= 5; i++) {
    tabsRow.push(
      <TabsItem
        changeActiveTab={props.changeActiveTab}
        activeTab={props.activeTab}
        count={i}
        key={i} />
    )
  }

  return (
    <div className="test-tabs">
      {tabsRow}
    </div>
  )
}

export default TestTabs
