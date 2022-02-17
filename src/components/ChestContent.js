import React, { Fragment } from 'react'
import Treasure from './Treasure'

const ChestContent = (props) => {
  const showChestContent = () => {
    if (props.wood === true)
      return (
        <Fragment>
          <Treasure treasureType="Wood" />
        </Fragment>
      )
    if (props.silver === true)
      return (
        <Fragment>
          <Treasure treasureType="Silver" />
        </Fragment>
      )
    if (props.gold === true)
      return (
        <Fragment>
          <Treasure treasureType="Gold" />
        </Fragment>
      )
  }

  return showChestContent()
}

export default ChestContent
