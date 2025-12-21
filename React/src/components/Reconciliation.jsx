import { useState } from "react";

export default function DiffingPractice() {
  const [items, setItems] = useState([{ id: 1, text: "Item 1" }]);

  const addItem = () => {
    const newId = items.length + 1;
    setItems([{ id: newId, text: `Item ${newId}` }, ...items]);
  };

  return (
    <div>
      <button onClick={addItem}>Add to Top</button>
      {items.map((item) => (
        //`Math.random` is an impure function. 
        // Calling an impure function can produce unstable results that update unpredictably when the component happens to re-render. 
        <div key={item.id}> 
          <input type="text" placeholder={item.text} />
        </div>
      ))}
    </div>
  );
}