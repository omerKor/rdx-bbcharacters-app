import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const char_limit = 18;

export const fetchCharacters = createAsyncThunk('characters/getCharacters', async (page) => {
    const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/characters?limit=${char_limit}&offset=${page * char_limit}`);
    return res.data;
})

export const charactersSlice = createSlice({
    name: 'character',
    initialState: {
        items: [],
        status: "idle",
        page: 0,
        hasNextPage: true,
    },
    reducers: {},
    extraReducers: {
        [fetchCharacters.pending]: (state) => {
            state.status = "loading";
        },

        [fetchCharacters.fulfilled]: (state, action) => {
            state.items = [...state.items, ...action.payload]; // önceki kayıtları koruyarak yeni kayıtları üzerine ekle
            state.status = "succeeded";
            state.page += 1;

            if (action.payload.length < 18) {
                state.hasNextPage = false;
            }
        },

        [fetchCharacters.rejected]: (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        }
    }
});



export default charactersSlice.reducer;