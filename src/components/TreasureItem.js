import React from 'react'

const TreasureItem = (props) => {
  const treasureitems = props.items.map((item, id) => (
    <ul key={id}>{item.item}</ul>
  ))

  return <div>{treasureitems}</div>
}

export default TreasureItem
