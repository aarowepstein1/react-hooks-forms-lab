import React, { useState } from "react";
import { v4 as uuid } from "uuid";


function ItemForm( props  ) {
  const [itemName, setItemName] = useState('');
  const [itemCategory, setItemCategory] = useState('Produce');

  function handleNameChange(event){
    setItemName(event.target.value);
  }

  function handleCategoryChange(event){
    setItemCategory(event.target.value)
  }

  function handleSubmit (event) {
    event.preventDefault();

    const formData = {
      id: uuid(),
      name: itemName,
      category: itemCategory
    }
    props.getItems(formData);

    setItemCategory('Produce');
    setItemName('');

  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleNameChange}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
