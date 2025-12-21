import { useState, useTransition } from "react";

export default function FiberExample() {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value); // High Priority: Update the input field immediately

    startTransition(() => {
      // Low Priority: Generate a massive list (simulating heavy work)
      const l = [];
      for (let i = 0; i < 20000; i++) {
        l.push(e.target.value);
      }
      setList(l);
    });
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleChange} />
      {isPending ? <p>Loading heavy list...</p> : list.map((item, i) => <div key={i}>{item}</div>)}
    </div>
  );
}