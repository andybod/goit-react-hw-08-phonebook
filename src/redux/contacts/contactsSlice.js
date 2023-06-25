import { createSlice } from '@reduxjs/toolkit';
import { addContact, fetchContacts, deleteContact } from './contactsOperations';
const contactsInitialState = {
  contacts: [],
  isLoading: false,
  error: null,
};
const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = payload;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.contacts.push(payload);
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        const index = state.contacts.findIndex(task => task.id === payload.id);
        state.contacts.splice(index, 1);
      })
      .addCase(fetchContacts.pending, handlePending)
      .addCase(addContact.pending, handlePending)
      .addCase(deleteContact.pending, handlePending)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
