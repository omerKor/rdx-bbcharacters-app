import { createSlice } from "@reduxjs/toolkit";

export const charactersSlice = createSlice({
    name: 'character',
    initialState: {
        items: [],
    },
    reducers: {},
});



export default charactersSlice.reducer;