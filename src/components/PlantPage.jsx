import React from "react";
import { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [searchTerm, setSearchTerm]= useState("")

  useEffect(()=>{
    fetch("http://localhost:6001/plants")
    .then((res)=> res.json())
    .then((data)=>setPlants(data));
  }, []);

  function handleAddPlant(newPlant){
    fetch("http://localhost:6001/plants", {
      method:"POST",
      headers: {"Content-Type": "application/json" },
      body: JSON.stringify(newPlant),
    })
    .then((res)=> res.json())
    .then((createdPlant)=>SetPlants([...plants, createdPlant]))

  }
  function handleUpdatePlant(updatedPlant){
    setPlants(
      plants.map((plant)=>
        plant.id === updatedPlant.id ? updatedPlant : plant
    )
    )
  }

  const filteredPlants = plants.filter((plant)=>
  plant.name.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
    <div>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <PlantList  plants={filteredPlants} onUpdatePlant={handleUpdatePlant}/>
    </div>
  );
}

export default PlantPage;
