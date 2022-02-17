import React from 'react'

const TreasureItem = (props) => {
  const treasureitems = props.items.map((item) => <ul>{item.item}</ul>)

  return <div>{treasureitems}</div>
}

export default TreasureItem
