import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //mutating the state directly means the already existing state we are updating it
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state, action) => {
      console.log(current(state));
      state = [];
      console.log(state);
      // state.items.length = 0;
    },
  },
});

// cartslice = {
//     actions:{
//         addItem,
//     }
//     reducer,
// }

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
