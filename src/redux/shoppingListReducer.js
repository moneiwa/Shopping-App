import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Thunks for asynchronous actions
export const fetchShoppingItems = createAsyncThunk(
  "shoppingList/fetchShoppingItems",
  async () => {
    const response = await fetch("http://localhost:3000/todos");
    return response.json();
  }
);

export const addShoppingItemToServer = createAsyncThunk(
  "shoppingList/addShoppingItemToServer",
  async (item) => {
    const response = await fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
    return response.json();
  }
);

export const deleteShoppingItemFromServer = createAsyncThunk(
  "shoppingList/deleteShoppingItemFromServer",
  async (id) => {
    await fetch(`http://localhost:3000/todos/${id}`, {
      method: "DELETE",
    });
    return id;
  }
);

export const editShoppingItemOnServer = createAsyncThunk(
  "shoppingList/editShoppingItemOnServer",
  async (item) => {
    const response = await fetch(`http://localhost:3000/todos/${item.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
    return response.json();
  }
);

const initialState = [];

const shoppingSlice = createSlice({
  name: "shoppingList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchShoppingItems.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(addShoppingItemToServer.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(deleteShoppingItemFromServer.fulfilled, (state, action) => {
        return state.filter((item) => item.id !== action.payload);
      })
      .addCase(editShoppingItemOnServer.fulfilled, (state, action) => {
        const index = state.findIndex((item) => item.id === action.payload.id);
        if (index !== -1) {
          state[index] = action.payload;
        }
      });
  },
});

export default shoppingSlice.reducer;
