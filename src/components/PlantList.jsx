import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, onUpdatePlant}) {
  return (
    <ul className="cards">
      {plants.map((plant)=>(
        <PlantCard key={plant.id} plant={plant} onUpdatePlant={onUpdatePlant}/>
      ))}
    </ul>
  );
}

export default PlantList;
