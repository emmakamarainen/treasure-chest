import React, { Fragment } from "react";
import Treasure from "./Treasure";
import Button from "../UI/Button";

const ChestContent = (props) => {
  console.log({ props });

  const chestContents = {
    Wood: { id: "wood", treasureType: "Wood", upperLimit: 100, lowerLimit: 0 },
    Silver: {
      id: "silver",
      treasureType: "Silver",
      upperLimit: 1000,
      lowerLimit: 100,
    },
    Gold: {
      id: "gold",
      treasureType: "Gold",
      upperLimit: 1500,
      lowerLimit: 1000,
    },
  };

  const selectedChest = chestContents[props.chestType];

  console.log("Selected chest (content):", { selectedChest });

  return (
    <Fragment>
      <Treasure
        key={selectedChest.id}
        treasureType={selectedChest.treasureType}
        upper={selectedChest.upperLimit}
        lower={selectedChest.lowerLimit}
      />

      <footer>
        <Button>Collect</Button>
      </footer>
    </Fragment>
  );
};

export default ChestContent;
