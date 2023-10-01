import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const ContactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action) => {
      console.log(action.payload);
      console.log(state.contacts);
      // return state.contacts?.push(action.payload);;
      return [...state, action.payload];
    },

    editContact: (state, action) => {
      return action.payload;
    },
    deleteContact: (state, action) => {
      return action.payload;
    },
  },
});

export const { addContact, editContact, deleteContact } = ContactSlice.actions;
export const getContact = (state) => state.contacts;
export default ContactSlice.reducer;
