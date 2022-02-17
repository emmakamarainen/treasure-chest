import React, { useRef, useState } from 'react'
// import logo from './logo.svg'
import './App.css'
import Card from './components/UI/Card'
import Chest from './components/Chest'
import ChestContent from './components/ChestContent'

function App() {
  const [WoodenSelected, SelectedWoodenChest] = useState(false)
  const [SilverSelected, SelectedSilverChest] = useState(false)
  const [GoldSelected, SelectedGoldChest] = useState(false)

  const SelectWoodenChest = () => {
    SelectedWoodenChest(true)
    SelectedSilverChest(false)
    SelectedGoldChest(false)
    return WoodenSelected
  }

  const SelectSilverChest = () => {
    SelectedWoodenChest(false)
    SelectedSilverChest(true)
    SelectedGoldChest(false)
    return SilverSelected
  }

  const SelectGoldChest = () => {
    SelectedWoodenChest(false)
    SelectedSilverChest(false)
    SelectedGoldChest(true)
    return GoldSelected
  }

  const treasureChests = [
    {
      id: 'wood',
      type: 'Wood',
      upperLimit: 100,
      lowerLimit: 0,
      selected: WoodenSelected,
    },
    {
      id: 'silver',
      type: 'Silver',
      upperLimit: 1000,
      lowerLimit: 100,
      selected: SilverSelected,
    },
    {
      id: 'gold',
      type: 'Gold',
      upperLimit: 1500,
      lowerLimit: 1000,
      selected: GoldSelected,
    },
  ]

  const showChests = () => {
    if (
      [WoodenSelected, SilverSelected, GoldSelected].every(
        (stat) => stat === false,
      )
    )
      return (
        <div>
          <Chest
            chestType={treasureChests[0].type}
            selected={SelectWoodenChest}
          />
          <Chest
            chestType={treasureChests[1].type}
            selected={SelectSilverChest}
          />
          <Chest
            chestType={treasureChests[2].type}
            selected={SelectGoldChest}
          />
        </div>
      )
    return (
      <ChestContent
        wood={WoodenSelected}
        silver={SilverSelected}
        gold={GoldSelected}
        treasure={treasureChests}
      />
    )
  }

  return (
    <div className="App">
      <Card className="App-header">
        <p>Treasure Chest</p>
        {showChests()}
      </Card>
    </div>
  )
}

export default App
