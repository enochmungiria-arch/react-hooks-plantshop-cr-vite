import React from "react";

function PlantCard({ plant, onUpdatePlant }) {
  function handleToggleStock() {
    const newStockStatus = !plant.isInStock;

    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isInStock: newStockStatus,
      }),
    })
      .then((res) => res.json())
      .then((updatedPlant) => {
        onUpdatePlant(updatedPlant);
      });
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />

      <h4>{plant.name}</h4>

      <p>Price: {plant.price}</p>

      {plant.isInStock ? (
        <button
          type="button"
          className="primary"
          onClick={handleToggleStock}
        >
          In Stock
        </button>
      ) : (
        <button
          type="button"
          onClick={handleToggleStock}
        >
          Out of Stock
        </button>
      )}
    </li>
  );
}

export default PlantCard;