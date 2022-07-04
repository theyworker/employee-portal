import { createSlice } from "@reduxjs/toolkit";

export const employeeFormSlice = createSlice({
  name: "employeeForm",
  initialState: {},
  reducers: {
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
    setGender: (state, action) => {
      state.gender = action.payload;
    },
    clearForm: (state) => {
      state = {};
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFirstName, setLastName, setEmail, setPhone, setGender } =
  employeeFormSlice.actions;

export default employeeFormSlice.reducer;
