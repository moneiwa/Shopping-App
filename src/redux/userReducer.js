// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// // Thunks for asynchronous actions
// export const fetchTodoItems = createAsyncThunk(
//   "todoList/fetchTodoItems",
//   async () => {
//     const response = await fetch("http://localhost:3000/todos");
//     return response.json();
//   }
// );

// export const addTodoItemToServer = createAsyncThunk(
//   "todoList/addTodoItemToServer",
//   async (item) => {
//     const response = await fetch("http://localhost:3000/todos", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(item),
//     });
//     return response.json();
//   }
// );

// export const deleteTodoItemFromServer = createAsyncThunk(
//   "todoList/deleteTodoItemFromServer",
//   async (id) => {
//     await fetch(`http://localhost:3000/todos/${id}`, {
//       method: "DELETE",
//     });
//     return id;
//   }
// );

// export const editTodoItemOnServer = createAsyncThunk(
//   "todoList/editTodoItemOnServer",
//   async (item) => {
//     const response = await fetch(`http://localhost:3000/todos/${item.id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(item),
//     });
//     return response.json();
//   }
// );

// const initialState = [];

// const todoSlice = createSlice({
//   name: "todoList",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchTodoItems.fulfilled, (state, action) => {
//         return action.payload;
//       })
//       .addCase(addTodoItemToServer.fulfilled, (state, action) => {
//         state.push(action.payload);
//       })
//       .addCase(deleteTodoItemFromServer.fulfilled, (state, action) => {
//         return state.filter((item) => item.id !== action.payload);
//       })
//       .addCase(editTodoItemOnServer.fulfilled, (state, action) => {
//         const index = state.findIndex((item) => item.id === action.payload.id);
//         if (index !== -1) {
//           state[index] = action.payload;
//         }
//       });
//   },
// });

// export default todoSlice.reducer;



// import {createSlice} from "@reduxjs/toolkit";


// export const userSlice = createSlice ({
//     name:"user",
//     initialState:{
//     name:null,
//     },
//     reducers:{
//         login:(state,action)=>{
//             state.user = action.payload;
//         },
//         logout:(state)=>{
//             state.user=null;
//         }
//     },


// });

// export const {login,logout}= suerSlice.action;
// export const selectUser=(state)=>state.user.user;
// export default userSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    }
  },
});

export const { login, logout } = userSlice.actions;
export const selectUser = (state) => state.user.user;
export default userSlice.reducer;
