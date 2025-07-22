import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchUserData = createAsyncThunk("/fetchUserData", async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users")
    return res.data;
})

const initialState = {
    data: [],
    loading: false,
    error: null
}

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserData.pending, (state) => {
                state.loading = true;
                state.error = null;
            },
            )
            .addCase(fetchUserData.fulfilled, (state, action) => {
                state.data = action.payload; // payload means data here
                state.loading = false
            },
            )
            .addCase(fetchUserData.rejected,(state,action)=>{
                state.loading= false;
                state.error = action.error.message;
            },)
    }
})
export default userSlice.reducer;