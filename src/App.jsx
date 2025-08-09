import { useState } from "react";
import Logo from "./component/Logo";
import Form from "./component/Form";
import Stats from "./component/Stats";
// import Item from "./component/Item";
import PackingList from "./component/PackingList";

export function App() {
  const [items, setItems] = useState([]);

  function handleAddItens(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((items) => items.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  
  function handleClearList() {
    setItems([]);
  }


  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItens} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
