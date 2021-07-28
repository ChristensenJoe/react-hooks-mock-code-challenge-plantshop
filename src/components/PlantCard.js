import React, {useState} from "react";
import UpdatePlantPrice from "./UpdatePlantPrice";

function PlantCard({name, image, price, onDeletePlant, id, onSubmitUpdatedPrice}) {
  const [isInStock, setIsInStock] = useState(true);

  function onStockClick() {
    setIsInStock((isInStock) => !isInStock);
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isInStock ? (
        <button onClick={onStockClick} className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
      <button
      onClick={(event) => {onDeletePlant(id)}} 
      style={{margin: "10px"}} 
      >Delete Plant</button>
      <UpdatePlantPrice 
        onSubmitUpdatedPrice={onSubmitUpdatedPrice}
        id={id}
      />
    </li>
  );
}

export default PlantCard;
