import React from 'react'
import './Chest.css'

const Chest = (props) => {
  return (
    <div>
      <button onClick={props.selected} className="chest">
        {props.chestType}
      </button>
    </div>
  )
}

export default Chest
