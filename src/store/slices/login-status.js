import { createSlice } from '@reduxjs/toolkit'

const loginStatusSlice = createSlice({
  name: "loginStatus",
  initialState: "loading",
  reducers: {
    logIn(state) {
      state = "logged in"
    },
    logOut(state) {
      state = "logged out"
    }
  }
})

export const { logIn, logOut } = loginStatusSlice.actions
export default loginStatusSlice.reducer