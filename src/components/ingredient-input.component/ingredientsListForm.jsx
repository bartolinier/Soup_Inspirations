import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [nameInput, setNameInput] = useState(
    props.edit ? props.edit.value : ""
  );
  const [quantityInput, setQuantityInput] = useState(
    props.edit ? props.edit.value : ""
  );
  const [unitInput, setUnitInput] = useState(
    props.edit ? props.edit.value : ""
  );

  const handleNameChange = (e) => {
    setNameInput(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantityInput(e.target.value);
  };

  const handleUnitChange = (e) => {
    setUnitInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      textName: nameInput,
      textQuantity: quantityInput,
      textUnit: unitInput,
    });
    setNameInput("");
    setQuantityInput("");
    setUnitInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      {props.edit ? (
        <>
          <input
            placeholder="Update your item"
            value={nameInput}
            onChange={handleNameChange}
            name="text"
            className="todo-input edit"
          />
          <button onClick={handleSubmit} className="todo-button edit">
            Update
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            id="ingredient-name"
            name="ingredientName"
            value={nameInput}
            onChange={handleNameChange}
            placeholder="Type ingredient..."
          />
          <input
            type="number"
            id="ingredient-qty"
            name="ingredientQuantity"
            value={quantityInput}
            onChange={handleQuantityChange}
            placeholder="Type quantity"
            min={0}
          />
          <select
            name="ingredient-unit"
            id="ingredientUnit"
            onChange={handleUnitChange}
            value={unitInput}
          >
            <option value="g">g</option>
            <option value="dkg">dkg</option>
            <option value="kg">kg</option>
            <option value="teespoon">teespoon</option>
            <option value="tablespoon">tablespoon</option>
            <option value="ml">ml</option>
            <option value="L">L</option>
            <option value="pcs.">pcs.</option>
          </select>

          <button onClick={handleSubmit} className="todo-button">
            Add todo
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
