import { Fragment, useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";

import TreasureSelection from "./TreasureSelection";

export default function Terrain(props) {
  const [updatedTerrain, setUpdatedTerrain] = useState("");

  console.log("Selected Terrain:", { updatedTerrain });

  const terrain_types = [
    {
      id: "t1",
      name: "Woods",
    },
    {
      id: "t2",
      name: "Cave",
    },
    {
      id: "t3",
      name: "Mountains",
    },
    {
      id: "t4",
      name: "Desert",
    },
    {
      id: "t5",
      name: "Crypt",
    },
  ];

  const terrainButtons = terrain_types.map((ttype) => (
    <ul key={ttype.id}>
      <Button
        onClick={() => {
          setUpdatedTerrain(ttype.name);
        }}
      >
        {ttype.name}
      </Button>
    </ul>
  ));

  return (
    <Card>
      <Fragment>
        <h2>Select Terrain:</h2>
        {terrainButtons}
        {updatedTerrain !== "" && <TreasureSelection terrain_type={updatedTerrain} />}
      </Fragment>
    </Card>
  );
}
