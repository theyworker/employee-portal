import { createSlice } from "@reduxjs/toolkit";

export const employeeFormSlice = createSlice({
  name: "employeeForm",
  initialState: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
  },
  reducers: {
    setAllFormData: (state, action) => {
      let { firstName, lastName, email, phone, gender } = action.payload; // state = action.payload;
      state.firstName = firstName;
      state.lastName = lastName;
      state.email = email;
      state.phone = phone;
      state.gender = gender;
    },
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
export const {
  setAllFormData,
  setFirstName,
  setLastName,
  setEmail,
  setPhone,
  setGender,
} = employeeFormSlice.actions;

export default employeeFormSlice.reducer;
