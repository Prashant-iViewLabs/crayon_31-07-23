import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { ALERT_TYPE, ERROR_MSG } from "../../utils/Constants";
import { getApi } from "../../utils/Apis";
import { useState } from "react";
// import { setLoading } from "./employerJobsConfigSlice";
import { setLoading } from "../configSlice";
const initialState = {
  myTeamsList: [],
};

export const getAllTeamMembers = createAsyncThunk(
  "getAllTeamMembers",
  async (payload, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const { data } = await getApi(`/employer/myteam?roleTypeId=&inviteStatusId=`, true);
      dispatch(setLoading(false));
      return data;
    } catch (error) {
      // Handle the error appropriately (e.g., display an error message)
      alert("Error occurred while fetching team listings:", error);
      throw error;
    }
  }
);

export const myTeamsListing = createSlice({
  name: "configMyTeams",
  initialState,
  reducers: {
    // setLoading: (state, action) => {
    //     state.loading = action.payload
    // },
    // setAlert: (state, action) => {
    //     state.alert.show = action.payload.show;
    //     state.alert.type = action.payload.type;
    //     state.alert.msg = action.payload.msg;
    // }
  },
  // extraReducers(builder) {
  //     builder
  //         .addCase(signup.pending, (state, action) => {
  //             // state.status = 'loading'
  //         })
  //         .addCase(signup.fulfilled, (state, action) => {
  //             // state.status = 'succeeded'
  //         })
  //         .addCase(signup.rejected, (state, action) => {
  //             // state.status = 'failed'
  //         })
  // }
});
// Action creators are generated for each case reducer function
export const {} = myTeamsListing.actions;
export default myTeamsListing.reducer;
