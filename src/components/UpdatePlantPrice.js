import React, { useState } from "react"


function UpdatePlantPrice({ onSubmitUpdatedPrice, id }) {
    const [updateForm, setUpdateForm] = useState("");


    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                onSubmitUpdatedPrice(updateForm, id);
                setUpdateForm("");
            }}>
            <input
                style={{
                    marginRight: "10px",
                    width: "120px"
                }}
                onChange={(event) => { setUpdateForm(event.target.value) }}
                value={updateForm}
                type="number"
                name="price"
                step="0.01"
                placeholder="New Price"
            />
            <button
                type="submit"
            >
                Update Price
            </button>
        </form>
    );
}

export default UpdatePlantPrice;