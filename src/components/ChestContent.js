import React, { Fragment } from 'react'
import Treasure from './Treasure'
import Button from './UI/Button'

const ChestContent = (props) => {
  return (
    <Fragment>
      {props.treasure.map((content) => {
        if (content.selected === true) {
          return (
            <Treasure
              key={content.id}
              treasureType={content.type}
              upper={content.upperLimit}
              lower={content.lowerLimit}
            />
          )
        }
      })}
      <footer>
        <Button onClick={props.showTreasure}>Collect</Button>
      </footer>
    </Fragment>
  )
}

export default ChestContent
