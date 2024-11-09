import "./index.css";
import { useState } from "react";
import Logo from "./Components/Logo";
import Form from "./Components/Form";
import PackingList from "./Components/PackingList";
import Stats from "./Components/Stats";

function App() {
  const [items, setItems] = useState([
    { id: 1, quantity: 2, name: "tooth brush", packed: false },
    { id: 2, quantity: 10, name: "clothes", packed: false },
  ]);

  function handleAddItem(itemName, itemQuantity) {
    setItems([
      ...items,
      {
        quantity: itemQuantity,
        name: itemName,
        packed: false,
        id: items[items.length - 1].id + 1,
      },
    ]);
    console.log(items[items.length - 1].id + 1);
  }

  function handleDeleteItem(itemId) {
    setItems((items) => items.filter((item) => item.id !== itemId));
  }

  function handleToggleItem(itemId) {
    setItems(
      items.map((item) =>
        item.id === itemId ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function numPacked(items, onDeleteItem) {
    const newArr = items.filter((item) => item.packed);
    const lenFiltered = newArr.length;
    return lenFiltered;
  }

  return (
    <div className="app">
      <Logo />
      <Form handleAddItem={handleAddItem} />
      <PackingList
        PackingList={items}
        setItems={setItems}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />
      <Stats numItems={items.length} numPacked={numPacked(items)} />
    </div>
  );
}

export default App;
