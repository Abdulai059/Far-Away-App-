import { useState } from "react";

function Form() {
  const [description, setDecription] = useState("");
  const [quantity, setQuantity] = useState(5); 

  function handelSubmit(e) {
    e.preventDefaut();
    console.log(e);
  }

  return (
    <form className="add-form" onSubmit={handelSubmit}>
      <h3>what do you need for your 😍 trip</h3>

      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      <input
        type="text"
        className="no-spinner"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDecription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

export default Form;
