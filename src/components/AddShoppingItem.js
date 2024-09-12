import { useState } from "react";
import { useDispatch } from "react-redux";
import { addShoppingItemToServer } from "../redux/shoppingListReducer";

function AddShoppingItem() {
  const [item, setItem] = useState("");
  const dispatch = useDispatch();

  const handleAddItem = () => {
    const newItem = { id: Date.now(), shoppingItem: item };
    dispatch(addShoppingItemToServer(newItem));
    setItem("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Name of item"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />

{/* <input
        type="text"
        placeholder="quantity"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      /> */}
      <button onClick={handleAddItem}>Add</button>
    </div>
  );
}

export default AddShoppingItem;
