import React from 'react'
import TabsItem from '../TabsItem/TabsItem'

import './TestTabs.css'

const TestTabs = (props) => {
  return (
    <div className="test-tabs">
      <TabsItem
        changeActiveTab={props.changeActiveTab}
        activeTab={props.activeTab}
        count='1' />
      
      <TabsItem
        changeActiveTab={props.changeActiveTab}
        activeTab={props.activeTab}
        count='2' />

      <TabsItem
        changeActiveTab={props.changeActiveTab}
        activeTab={props.activeTab}
        count='3' />

      <TabsItem
        changeActiveTab={props.changeActiveTab}
        activeTab={props.activeTab}
        count='4' />

      <TabsItem
        changeActiveTab={props.changeActiveTab}
        activeTab={props.activeTab}
        count='5' />

    </div>
  )
}

export default TestTabs
