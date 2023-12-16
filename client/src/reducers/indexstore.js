import { createReducer } from "@reduxjs/toolkit";
import setHomePage from "../actions/sethomepagedone";
import setIntroAnimationDone from "../actions/introanimationdone";
const initialState = {
  homePageDone: false,
  introAnimationDone: false,
};

const indexReducer = createReducer(initialState, (builder) => {
  builder.addCase(setHomePage, (state, action) => {
    state.homePageDone = action.payload;
  });

  builder.addCase(setIntroAnimationDone, (state, action) => {
    state.introAnimationDone = action.payload;
    console.log(action.payload);
  });
});

export default indexReducer;
