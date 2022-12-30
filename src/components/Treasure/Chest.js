import React from 'react'
import './Chest.css'

const Chest = (props) => {
  return (
    <div className="chestrow">
      <button onClick={props.selected}>
        {props.chestType}
      </button>
    </div>
  )
}

export default Chest
