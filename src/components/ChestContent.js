import React, { Fragment } from 'react'
import Treasure from './Treasure'

const ChestContent = (props) => {
  return (
    <Fragment>
      {props.treasure.map((content) => {
        if (content.selected === true) {
          return (
            <Treasure
              treasureType={content.type}
              upper={content.upperLimit}
              lower={content.lowerLimit}
            />
          )
        }
      })}
    </Fragment>
  )
}

export default ChestContent
