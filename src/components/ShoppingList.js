import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, getItems }) {

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchChange] = useState("")


  function handleSearchChange(event){
    setSearchChange(event.target.value);
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  const displayItems = itemsToDisplay.filter(item => {
    if (searchTerm === "") {
      return item;
    } else if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return item;
    } else{}
  })

  console.log(displayItems)
  return (
    <div className="ShoppingList">
      <ItemForm getItems={getItems}/>
      <Filter 
      onCategoryChange={handleCategoryChange}
      onSearchChange={handleSearchChange}
      />
      <ul className="Items">
        {displayItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
