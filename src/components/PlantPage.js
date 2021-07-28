import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantData, setPlantData] = useState(null)
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(res => res.json())
    .then(data => setPlantData(data));
  }, []);

  function handleAddNewPlant(plant) {
    if(plant.image === "") {
      plant.image = "https://via.placeholder.com/400";
    }
    console.log("plant", plant);
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(plant)
    })
    .then(res => res.json())
    .then(data => {
      setPlantData((plantData) => [...plantData, data]);
    })
  }

  function handleDeletePlant(id) {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "Delete"
    })
    .then(res => res.json())
    .then(data => {
      setPlantData((plantData) => plantData.filter((plant) => {
        if(plant.id === id) return false;
        return true;
      }))
    });
  }

  function handleUpdatePrice(newPrice, id) {
    newPrice = Number.parseFloat(newPrice, 10);
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        price: newPrice
      })
    })
    .then(res => res.json())
    .then(data => setPlantData((plantData) => plantData.map((plant) => {
      if(plant.id===id) return {...plant, price: newPrice};
      return plant;
    })));
  }

  return (
    <main>
      <NewPlantForm 
        onSubmitForm={handleAddNewPlant}
      />
      <Search setSearch={setSearch}/>
      {plantData && <PlantList onSubmitUpdatedPrice={handleUpdatePrice} plantData={plantData} onDeletePlant={handleDeletePlant} search={search}/>}
    </main>
  );
}

export default PlantPage;
