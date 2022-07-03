import { configureStore } from '@reduxjs/toolkit'
import employeeReducer from './redux/employees/employeeSlice'
export default configureStore({
  reducer: {
  employee : employeeReducer,
  },
})