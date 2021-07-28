import React, { useState } from "react";

function NewPlantForm({ onSubmitForm }) {
  const freshForm = {
    name: "",
    price: "",
    image: ""
  };
  const [plantForm, setPlantForm] = useState(freshForm);

  function handleChange(event) {
    setPlantForm((plantForm) => {
      return {
        ...plantForm,
        [event.target.name]: event.target.value
      }
    });
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={(event) => {
        event.preventDefault();
        onSubmitForm(plantForm);
        setPlantForm(freshForm)
      }} >
        <input
          onChange={handleChange}
          value={plantForm.name}
          type="text"
          name="name"
          placeholder="Plant name"
        />
        <input
          onChange={handleChange}
          value={plantForm.image}
          type="text"
          name="image"
          placeholder="Image URL"
        />
        <input
          onChange={handleChange}
          value={plantForm.price}
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
        />
        <button
          type="submit"
        >Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
