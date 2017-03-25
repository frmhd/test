import React from 'react'

const TabsItem = (props) => {

  return (
    <button
      className={props.activeTab === props.count ? "test-tabs__item test-tabs__item_active" : "test-tabs__item"} onClick={props.changeActiveTab}
    >
      <span>Тест </span>
      {props.count}
    </button>
  )
}

export default TabsItem
