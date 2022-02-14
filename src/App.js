import React, { useState } from 'react'
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

  const showChests = () => {
    if (
      [WoodenSelected, SilverSelected, GoldSelected].every(
        (stat) => stat === false,
      )
    )
      return (
        <div>
          <Chest chestType="Wood" selected={SelectWoodenChest} />
          <div>{WoodenSelected.toString()}</div>

          <Chest chestType="Silver" selected={SelectSilverChest} />
          <div>{SilverSelected.toString()}</div>

          <Chest chestType="Gold" selected={SelectGoldChest} />
          <div>{GoldSelected.toString()}</div>
        </div>
      )
    return (
      <ChestContent
        wood={WoodenSelected}
        silver={SilverSelected}
        gold={GoldSelected}
      />
    )
  }

  return (
    <div className="App">
      <Card className="App-header">
        <p>Treasure Chest</p>
        {showChests()}
        <div> </div>
      </Card>
    </div>
  )
}

export default App
