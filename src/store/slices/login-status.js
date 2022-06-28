import { createSlice } from '@reduxjs/toolkit'

const loginStatusSlice = createSlice({
  name: "loginStatus",
  initialState: "loading",
  reducers: {
    logIn: (state) => {
      return "logged in"
    },
    logOut: (state) => {
      return "logged out"
    }
  }
})

export const { logIn, logOut } = loginStatusSlice.actions
export default loginStatusSlice.reducer