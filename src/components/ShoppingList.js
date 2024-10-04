import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  fetchShoppingItems,
  deleteShoppingItemFromServer,
  editShoppingItemOnServer,
  addShoppingItemToServer,
  logoutUser,
  addToCart,
} from "../redux/shoppingListReducer";
import Cart from "./Cart";

function ShoppingList() {
  const shoppingList = useSelector(state => state.shoppingList.items);
  const cart = useSelector(state => state.shoppingList.cart); 
  const dispatch = useDispatch();
  const [editingItem, setEditingItem] = useState(null);
  const [editedText, setEditedText] = useState("");
  const [newItemText, setNewItemText] = useState("");

  useEffect(() => {
    dispatch(fetchShoppingItems());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteShoppingItemFromServer(id));
  };

  const handleEdit = (item) => {
    setEditingItem(item.id);
    setEditedText(item.shoppingItem);
  };

  const handleSaveEdit = (id) => {
    dispatch(editShoppingItemOnServer({ id, shoppingItem: editedText }));
    setEditingItem(null);
  };

  const handleCancelEdit = () => {
    setEditingItem(null);
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    if (newItemText.trim()) {
      dispatch(addShoppingItemToServer({ shoppingItem: newItemText }));
      setNewItemText("");
    }
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <div className='list'>
      <button onClick={handleLogout} className='logout-button'>
        Logout
      </button>

      <form onSubmit={handleAddItem} className='add-item-form'>
        <input
          type="text"
          value={newItemText}
          onChange={(e) => setNewItemText(e.target.value)}
          placeholder="Add a new item"
          className='add-item-input'
        />
        <button type="submit" className='add-item-button'>Add</button>
      </form>

      <div className='card-container'>
        {shoppingList.length === 0 ? (
          <p>No items to display</p>
        ) : (
          shoppingList.map((item) => (
            <div key={item.id} className='card'>
              {item.image && <img src={item.image} alt={item.shoppingItem} className='card-image' />}
              <div className='card-content'>
                {editingItem === item.id ? (
                  <>
                    <input
                      type="text"
                      value={editedText}
                      onChange={(e) => setEditedText(e.target.value)}
                      className='card-input'
                    />
                    <button onClick={() => handleSaveEdit(item.id)} className='card-button'>Save</button>
                    <button onClick={handleCancelEdit} className='card-button'>Cancel</button>
                  </>
                ) : (
                  <>
                    <p className='card-text'>{item.shoppingItem}</p>
                    <p className='card-price'>{item.price}</p>
                    <button onClick={() => handleEdit(item)} className='card-button'>Edit</button>
                    <button onClick={() => handleDelete(item.id)} className='card-button'>Delete</button>
                    <button onClick={() => handleAddToCart(item)} className='card-button'>Add to Cart</button> 
                  </>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      <Cart />
    </div>
  );
}

export default ShoppingList;
