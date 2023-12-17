import { createReducer } from "@reduxjs/toolkit";
import setHomePage from "../actions/sethomepagedone";
import setIntroAnimationDone from "../actions/introanimationdone";
import setHomePageOption from "../actions/homepageoption";
import setJobSelectAnimation from "../actions/jobselectanimation";
const initialState = {
  homePageDone: false,
  homePageOption: "",
  introAnimationDone: false,
  jobSelectAnimationDone: false,
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

  builder.addCase(setJobSelectAnimation, (state, action) => {
    state.jobSelectAnimation = action.payload;
  });
});

export default indexReducer;
