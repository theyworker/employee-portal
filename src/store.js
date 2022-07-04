import { configureStore } from '@reduxjs/toolkit'
import employeeReducer from './redux/employees/employeeSlice'
import employeeFromReducer from './redux/employees/employeeFormSlice'
export default configureStore({
  reducer: {
  employee : employeeReducer,
  form: employeeFromReducer
  },
})