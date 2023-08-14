import { useState, useEffect } from "react";
import Header from "./Header";
import Form from "./Form";
import List from "./List";
import Stats from "./Stats";
import "./App.css";

export default function App() {
  // create state for the form items
  const [itemNum, setItemNum] = useState(1);
  const [item, setItem] = useState("");
  const [travelItems, setTravelItems] = useState([]);
  const packed = false;

  // function to add item object to the travel items array
  const addItem = (event) => {
    event.preventDefault();
    item.length > 0 &&
      setTravelItems([...travelItems, { item, itemNum, packed }]);
    setItem("");
    setItemNum(1);
  };

  // update item state
  const selectItem = (event) => {
    setItem(event.target.value);
  };

  // update number state
  const selectNumber = (event) => {
    setItemNum(event.target.value);
  };

  // check off items. If the index equals the prevItem index check it off
  const packItem = (index) => {
    setTravelItems((prevItems) =>
      prevItems.map((item, idx) =>
        idx === index ? { ...item, packed: !item.packed } : item
      )
    );
  };

  // function to delete items from the list
  const deleteItem = (index) => {
    setTravelItems((prevItems) =>
      prevItems.filter((item, idx) => idx !== index)
    );
  };

  return (
    <div>
      <Header />
      <Form
        addItem={addItem}
        selectItem={selectItem}
        selectNumber={selectNumber}
        item={item}
        itemNum={itemNum}
      />
      <List
        travelItems={travelItems}
        packItem={packItem}
        deleteItem={deleteItem}
      />
      <Stats travelItems={travelItems} />
    </div>
  );
}
