// // import { useSelector, useDispatch } from "react-redux";
// // import { useEffect, useState } from "react";
// // import {
// //   fetchShoppingItems,
// //   deleteShoppingItemFromServer,
// //   editShoppingItemOnServer,
// // } from "../redux/shoppingListReducer";

// // function ShoppingList() {
// //   const shoppingList = useSelector((state) => state.shoppingList);
// //   const dispatch = useDispatch();
// //   const [editingItem, setEditingItem] = useState(null);
// //   const [editedText, setEditedText] = useState("");

// //   useEffect(() => {
// //     dispatch(fetchShoppingItems());
// //   }, [dispatch]);

// //   useEffect(() => {
// //     console.log("Shopping List:", shoppingList);
// //   }, [shoppingList]);

// //   const handleDelete = (id) => {
// //     dispatch(deleteShoppingItemFromServer(id));
// //   };

// //   const handleEdit = (item) => {
// //     setEditingItem(item.id);
// //     setEditedText(item.shoppingItem);
// //   };

// //   const handleSaveEdit = (id) => {
// //     dispatch(editShoppingItemOnServer({ id, shoppingItem: editedText }));
// //     setEditingItem(null);
// //   };

// //   return (
// //     <ul>
// //       {shoppingList.length === 0 ? (
// //         <li>No items to display</li>
// //       ) : (
// //         shoppingList.map((item) => (
// //           <div key={item.id}>
// //             {editingItem === item.id ? (
// //               <>
// //                 <input
// //                   type="text"
// //                   value={editedText}
// //                   onChange={(e) => setEditedText(e.target.value)}
// //                 />
// //                 <button onClick={() => handleSaveEdit(item.id)}>Save</button>
// //               </>
// //             ) : (
// //               <>
// //                 <li>{item.shoppingItem}</li>
// //                 <button onClick={() => handleEdit(item)}>Edit</button>
// //                 <button onClick={() => handleDelete(item.id)}>Delete</button>
// //               </>
// //             )}
// //           </div>
// //         ))
// //       )}
// //     </ul>
// //   );
// // }

// // export default ShoppingList;

// import { useSelector, useDispatch } from "react-redux";
// import { useEffect, useState } from "react";
// import {
//   fetchShoppingItems,
//   deleteShoppingItemFromServer,
//   editShoppingItemOnServer,
// } from "../redux/shoppingListReducer";

// function ShoppingList() {
//   const shoppingList = useSelector((state) => state.shoppingList);
//   const dispatch = useDispatch();
//   const [editingItem, setEditingItem] = useState(null);
//   const [editedText, setEditedText] = useState("");

//   useEffect(() => {
//     dispatch(fetchShoppingItems());
//   }, [dispatch]);

//   const handleDelete = (id) => {
//     dispatch(deleteShoppingItemFromServer(id));
//   };

//   const handleEdit = (item) => {
//     setEditingItem(item.id);
//     setEditedText(item.shoppingItem);
//   };

//   const handleSaveEdit = (id) => {
//     dispatch(editShoppingItemOnServer({ id, shoppingItem: editedText }));
//     setEditingItem(null);
//   };

//   const handleCancelEdit = () => {
//     setEditingItem(null);
//   };

//   return (
//     <ul>
//       {shoppingList.length === 0 ? (
//         <li>No items to display</li>
//       ) : (
//         shoppingList.map((item) => (
//           <div key={item.id} style={{ marginBottom: '20px' }}>
//             {item.image && <img src={item.image} alt={item.shoppingItem} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />}
//             {editingItem === item.id ? (
//               <>
//                 <input
//                   type="text"
//                   value={editedText}
//                   onChange={(e) => setEditedText(e.target.value)}
//                 />
//                 <button onClick={() => handleSaveEdit(item.id)}>Save</button>
//                 <button onClick={handleCancelEdit}>Cancel</button>
//               </>
//             ) : (
//               <>
//                 <li>{item.shoppingItem}</li>
//                 <button onClick={() => handleEdit(item)}>Edit</button>
//                 <button onClick={() => handleDelete(item.id)}>Delete</button>
//               </>
//             )}
//           </div>
//         ))
//       )}
//     </ul>
//   );
// }

// export default ShoppingList;

import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  fetchShoppingItems,
  deleteShoppingItemFromServer,
  editShoppingItemOnServer,
} from "../redux/shoppingListReducer";

function ShoppingList() {
  const shoppingList = useSelector(state => state.shoppingList);
  const dispatch = useDispatch();
  const [editingItem, setEditingItem] = useState(null);
  const [editedText, setEditedText] = useState("");

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

  return (
    <div className='list'>
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
                    <button onClick={() => handleEdit(item)} className='card-button'>Edit</button>
                    <button onClick={() => handleDelete(item.id)} className='card-button'>Delete</button>
                  </>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ShoppingList;
