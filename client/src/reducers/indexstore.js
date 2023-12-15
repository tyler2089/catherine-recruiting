import { createReducer } from "@reduxjs/toolkit";
import setHomePage from "../actions/sethomepagedone";

const initialState = {
  homePageDone: false,
};

const indexReducer = createReducer(initialState, (builder) => {
  builder.addCase(setHomePage, (state, action) => {
    state.homePageDone = action.payload;
  });
});

export default indexReducer;
