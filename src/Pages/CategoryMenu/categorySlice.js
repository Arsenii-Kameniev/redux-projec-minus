import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    status: 'idle',
    pId: 0,
    idea: '',
};

export const incrementAsyncCategory = createAsyncThunk(
    'getCategory',
    async (category) => {
        console.log(category.pId);
        const response = await axios.post(`http://localhost:8080/postCategoryAdmin`, {
            pid: category.pId,
            idea: category.idea,
        });
        return response.data;
    }
);


export const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        tryTocategory: (state) => {
            if (state.password == initialState.password) {
                //Navigate(`/menu`);
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(incrementAsyncCategory.rejected, (state) => {
                state.status = 'wrong';
                console.log("BruhX2");
            })
            .addCase(incrementAsyncCategory.pending, (state) => {
                state.status = 'loading';
                console.log("WaitX2");
            })
            .addCase(incrementAsyncCategory.fulfilled, (state, action) => {
                state.status = 'idle';
                state.pId = action.payload.pId;
                state.idea = action.payload.idea;
            });
    }

})

export const { tryToCategory } = categorySlice.actions;

export default categorySlice.reducer;