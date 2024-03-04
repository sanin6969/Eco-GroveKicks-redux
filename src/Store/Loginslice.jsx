import { createSlice } from "@reduxjs/toolkit";
export const loginslice = createSlice({
    name: 'signUp',
    initialState: {
        value: []
    },
    reducers: {
        setSignup: (state, action) => {
            state.value = action.payload.value
        }
    }
})
export const { setSignup } = loginslice.actions
export default loginslice.reducer