import TreasureItem from './TreasureItem'
import TreasureGold from './TreasureGold'
import Item from '../Store/Item'

const Treasure = (props) => {
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

  return (
    <div>
      <p>You found a chest made of {props.treasureType}!</p>
      <TreasureItem key={props.id} items={treasureitems} />
      <TreasureGold goldUpperLimit={props.upper} goldLowerLimit={props.lower} />
    </div>
  )
}
export default Treasure
