import React, { useState } from 'react'
import './App.css'
import Card from './components/UI/Card'
import Chest from './components/Chest'
import ChestContent from './components/ChestContent'

function App() {
  const [woodSelected, selectedWoodenChest] = useState(false)
  const [silverSelected, selectedSilverChest] = useState(false)
  const [goldSelected, selectedGoldChest] = useState(false)

  const ShowTreasureHandler = () => {
    selectedWoodenChest(false)
    selectedSilverChest(false)
    selectedGoldChest(false)
  }
  const selectWoodChest = () => {
    selectedWoodenChest(true)
    selectedSilverChest(false)
    selectedGoldChest(false)
    return woodSelected
  }

  const selectSilverChest = () => {
    selectedWoodenChest(false)
    selectedSilverChest(true)
    selectedGoldChest(false)
    return silverSelected
  }

  const selectGoldChest = () => {
    selectedWoodenChest(false)
    selectedSilverChest(false)
    selectedGoldChest(true)
    return goldSelected
  }

  const treasureChests = [
    {
      id: 'wood',
      type: 'Wood',
      upperLimit: 100,
      lowerLimit: 0,
      selected: woodSelected,
    },
    {
      id: 'silver',
      type: 'Silver',
      upperLimit: 1000,
      lowerLimit: 100,
      selected: silverSelected,
    },
    {
      id: 'gold',
      type: 'Gold',
      upperLimit: 1500,
      lowerLimit: 1000,
      selected: goldSelected,
    },
  ]

  const showChests = () => {
    if (
      [woodSelected, silverSelected, goldSelected].every(
        (stat) => stat === false,
      )
    )
      return (
        <div>
          <Chest
            chestType={treasureChests[0].type}
            selected={selectWoodChest}
          />
          <Chest
            chestType={treasureChests[1].type}
            selected={selectSilverChest}
          />
          <Chest
            chestType={treasureChests[2].type}
            selected={selectGoldChest}
          />
        </div>
      )
    return (
      <div>
        <ChestContent
          showTreasure={ShowTreasureHandler}
          treasure={treasureChests}
        />
      </div>
    )
  }

  return (
    <Card
      className={`App App${woodSelected ? '-wood' : ''} App${
        silverSelected ? '-silver' : ''
      } App${goldSelected ? '-gold' : ''}`}
    >
      <Card className="App-header">
        <p>Treasure Chest</p>
        {showChests()}
      </Card>
    </Card>
  )
}

export default App
