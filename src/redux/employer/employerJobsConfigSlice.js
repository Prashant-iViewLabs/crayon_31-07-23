import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { ALERT_TYPE, ERROR_MSG } from "../../utils/Constants";
import { getApi } from "../../utils/Apis";
const initialState = {
  loading: false,
  alert: {
    show: false,
    type: ALERT_TYPE.ERROR, // set default type to avoid warning in console
    msg: ERROR_MSG,
  },
  employerjobs: [],
};
export const getAllEmployerJobs = createAsyncThunk(
  "getAllEmployerJobs",
  async (payload, { dispatch }) => {
    // dispatch(setLoading(true))
    const { data } = await getApi("/admin/employer/jobtype", true);
    // dispatch(setLoading(false))
    return data;
  }
);
export const employerJobsConfigSlice = createSlice({
  name: "configemployerjobs",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setAlert: (state, action) => {
      state.alert.show = action.payload.show;
      state.alert.type = action.payload.type;
      state.alert.msg = action.payload.msg;
    },
    // increment: (state) => {
    //     // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //     // doesn't actually mutate the state because it uses the Immer library,
    //     // which detects changes to a "draft state" and produces a brand new
    //     // immutable state based off those changes
    //     state.value += 1
    // },
    // decrement: (state) => {
    //     state.value -= 1
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //     state.value += action.payload
    // },
  },
  extraReducers(builder) {
    builder
      .addCase(getAllEmployerJobs.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getAllEmployerJobs.fulfilled, (state, action) => {
        let count = 0;
        const allJobs = action.payload.data?.map((jobs, index) => {
          jobs.id = jobs.job_stage_id
            ? count + 1
            : index === 0
            ? "crayon recruit"
            : index === 1
            ? "crayon lite"
            : null;
          jobs.color = jobs.name.includes("recruit")
            ? "yellowButton100"
            : jobs.name.includes("lite")
            ? "orangeButton"
            : "lightGreenButton300";
          jobs.name = jobs.name.toLowerCase();
          index > 1 && count++;
          return jobs;
        });
        state.loading = false;
        const obj = {
          id: 1111,
          name: "all",
          color: "redButton100",
          title: true,
        };
        allJobs?.unshift(obj);
        state.employerjobs = allJobs;
      })
      .addCase(getAllEmployerJobs.rejected, (state, action) => {
        state.loading = false;
      });
  },
});
// Action creators are generated for each case reducer function
export const { setLoading, setAlert } = employerJobsConfigSlice.actions;
export default employerJobsConfigSlice.reducer;