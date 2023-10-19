import { createSlice } from "@reduxjs/toolkit";
import { fetchAdverts } from "./advertsOperations";

const initialState = {
  adverts: [],
};

const advertsSlice = createSlice({
  name: "adverts",
  initialState,
  extraReducers: (builder) =>
    builder
      // .addCase(fetchContacts.pending, pendingReducer)
      .addCase(fetchAdverts.fulfilled, (state, action) => {
        console.log(action);
        state.adverts = action.payload;
        // state.token = action.payload.token;
        // state.isLoggedIn = true;
      }),
  // .addCase(fetchContacts.rejected, rejectedReducer)
  // .addCase(addContact.pending, pendingReducer)
  // .addCase(addContact.fulfilled, addContactFulfilledReducer)
  // .addCase(addContact.rejected, rejectedReducer)
  // .addCase(deleteContact.pending, pendingReducer)
  // .addCase(deleteContact.fulfilled, deleteContactFulfilledReducer)
  // .addCase(deleteContact.rejected, rejectedReducer)
  // .addCase(updateContact.fulfilled, updateContactFulfilledReducer)
  // .addCase(logOut.fulfilled, logOutClearStateReducer),
  // [fetchAdverts.fulfilled](state, action) {
  //   state.adverts = action.payload.adverts;
  //   // state.token = action.payload.token;
  //   // state.isLoggedIn = true;
  // },
  // [logIn.fulfilled](state, action) {
  //   state.user = action.payload.user;
  //   state.token = action.payload.token;
  //   state.isLoggedIn = true;
  // },
  // [logOut.fulfilled](state) {
  //   state.user = { name: null, email: null };
  //   state.token = null;
  //   state.isLoggedIn = false;
  // },
  // [refreshUser.pending](state) {
  //   state.isRefreshing = true;
  // },
  // [refreshUser.fulfilled](state, action) {
  //   state.user = action.payload;
  //   state.isLoggedIn = true;
  //   state.isRefreshing = false;
  // },
  // [refreshUser.rejected](state) {
  //   state.isRefreshing = false;
  // },
  // },
});

export const advertsReducer = advertsSlice.reducer;
