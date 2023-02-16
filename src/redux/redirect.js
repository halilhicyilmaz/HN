import { createSlice } from '@reduxjs/toolkit'

export const redirect = createSlice({
    name: 'redirect',
    initialState: null,
    reducers: {
        setLink: (state, action) => {
            return action.payload
        }
    }
})

export const { setLink } = redirect.actions

export default redirect.reducer