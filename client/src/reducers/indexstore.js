import { createReducer } from "@reduxjs/toolkit";
import setHomePage from "../actions/sethomepagedone";
import setIntroAnimationDone from "../actions/introanimationdone";
import setHomePageOption from "../actions/homepageoption";
import navbarAnimationDone from "../actions/navbaranimation";

const initialState = {
  homePageDone: false,
  homePageOption: "home",
  introAnimationDone: false,
  navbarAnimationDone: false,
};

const indexReducer = createReducer(initialState, (builder) => {
  builder.addCase(setHomePage, (state, action) => {
    state.homePageDone = action.payload;
  });

  builder.addCase(setIntroAnimationDone, (state, action) => {
    state.introAnimationDone = action.payload;
  });

  builder.addCase(setHomePageOption, (state, action) => {
    state.homePageOption = action.payload;
  });

  builder.addCase(navbarAnimationDone, (state, action) => {
    console.log(action.payload);
    state.navbarAnimationDone = action.payload;
  });
});

export default indexReducer;
