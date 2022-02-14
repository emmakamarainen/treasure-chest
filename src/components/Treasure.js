import React from 'react'
import TreasureItem from './TreasureItem'
import TreasureGold from './TreasureGold'

const Treasure = (props) => {
  const treasureitems = ['item 1', 'item 2', 'item 3']

  const showCorrectTreasure = () => {
    if (props.treasureType === 'Wood')
      return (
        <TreasureGold goldUpperLimit={100} goldLowerLimit={0}></TreasureGold>
      )
    if (props.treasureType === 'Silver')
      return (
        <TreasureGold goldUpperLimit={1000} goldLowerLimit={100}></TreasureGold>
      )
    if (props.treasureType === 'Gold')
      return (
        <TreasureGold
          goldUpperLimit={1500}
          goldLowerLimit={1000}
        ></TreasureGold>
      )
  }

  return (
    <div>
      <p>You found a chest made of {props.treasureType}!</p>
      <TreasureItem items={treasureitems} />
      {showCorrectTreasure()}
    </div>
  )
}
export default Treasure
