import { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ChestContent from "./ChestContent";

function TreasureSelection(props) {
  const terrain_type = props.terrain_type;

  const [chestSelected, setChestSelected] = useState("");
  console.log("Selected Chest:", { chestSelected });

  const treasureChests = [
    {
      type: "Wood",
    },
    {
      type: "Silver",
    },
    {
      type: "Gold",
    },
  ];
  

  const showChests = treasureChests.map((chest) => (
    <ul key={chest.type}>
      <Button
        onClick={() => {
          setChestSelected(chest.type);
        }}
      >
        {chest.type}
      </Button>
    </ul>
  ));

  return (
    <Card
      //className={`Treasure Treasure${woodSelected ? "-wood" : "-home"} Treasure${
      //  silverSelected ? "-silver" : "-home"
      //} Treasure${goldSelected ? "-gold" : "-home"}`}
    >
        <p>Treasure Chest found in {terrain_type}!</p>
        {chestSelected === "" && showChests}
        {chestSelected !== "" && <ChestContent chestType={chestSelected} />}

     
    </Card>
  );
}

export default TreasureSelection;
