import { createSlice } from "@reduxjs/toolkit";

import { UsersData } from "../FakeData";

export const userSlice = createSlice({
  name: "users",
  initialState: { value: UsersData },
  reducers: {
    addNote: (state, action) => {
      state.value.push(action.payload);
    },

    deleteNote: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload.id);
    },

    updateNote: (state, action) => {
      state.value.map((user) => {
        if (user.id === action.payload.id) {
          user.note = action.payload.note;
        }
      });
    },
  },
});

export const { addNote, deleteNote, updateNote } = userSlice.actions;
export default userSlice.reducer;