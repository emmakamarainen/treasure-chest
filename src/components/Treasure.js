import React, { useState } from 'react'
import TreasureItem from './TreasureItem'
import TreasureGold from './TreasureGold'
import Button from './UI/Button'

const Treasure = (props) => {
  const [collected, setCollect] = useState(false)

  const treasureitems = [
    {
      id: 'i1',
      item: 'item1',
    },
    {
      id: 'i2',
      item: 'item2',
    },
    {
      id: 'i3',
      item: 'item3',
    },
  ]

  const handleCollection = () => {
    setCollect(true)
    console.log(collected)
  }

  return (
    <div>
      <p>You found a chest made of {props.treasureType}!</p>
      <TreasureItem items={treasureitems} />
      <TreasureGold goldUpperLimit={props.upper} goldLowerLimit={props.lower} />
      <Button onClick={handleCollection}>Collect</Button>
    </div>
  )
}
export default Treasure
