import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantData, search, onDeletePlant, onSubmitUpdatedPrice}) {

  const filteredPlantData = plantData.filter((plant) => {
    if(plant.name.toLowerCase().includes(search.toLowerCase())) return true;
    return false;
  });

  return (
    <ul className="cards">{
      filteredPlantData.map((plant) => {
        return (
          <PlantCard
            onDeletePlant={onDeletePlant}
            onSubmitUpdatedPrice={onSubmitUpdatedPrice}
            name={plant.name}
            image={plant.image}
            price={plant.price}
            id={plant.id}
            key={plant.id} 
          />
        )
      })
    }</ul>
  );
}

export default PlantList;
