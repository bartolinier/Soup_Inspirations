import React from "react";

export default function IngredientInput({
  ingredientNameValue,
  ingredientQuantityValue,
  ingredientUnitValue,
  handleChange,
}) {
  return (
    <>
      <input
        type="text"
        id="ingredient-name"
        name="ingredientName"
        value={ingredientNameValue}
        onChange={handleChange}
        placeholder="Type ingredient..."
      />
      <input
        type="number"
        id="ingredient-qty"
        name="ingredientQuantity"
        value={ingredientQuantityValue}
        onChange={handleChange}
        placeholder="Type quantity"
        min={0}
      />
      <select
        name="ingredient-unit"
        id="ingredientUnit"
        value={ingredientUnitValue}
        onChange={handleChange}
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
    </>
  );
}
