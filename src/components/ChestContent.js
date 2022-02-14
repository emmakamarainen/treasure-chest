import React from 'react'
import Treasure from './Treasure'

const ChestContent = (props) => {
  const showChestContent = () => {
    if (props.wood === true)
      return (
        <div>
          <Treasure treasureType="Wood" />
        </div>
      )
    if (props.silver === true)
      return (
        <div>
          <Treasure treasureType="Silver" />
        </div>
      )
    if (props.gold === true)
      return (
        <div>
          <Treasure treasureType="Gold" />
        </div>
      )
  }

  return showChestContent()
}

export default ChestContent
