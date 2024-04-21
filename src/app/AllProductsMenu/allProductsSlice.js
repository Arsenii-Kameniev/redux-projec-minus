import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    status: "idle",
    arr: [],
};

// export const incrementAsync = createAsyncThunk(
//     'getUser',
//     async (nick) => {
//         const response = await axios.get(`http://localhost:8080/postUserByNickName?name=${nick}`);
//         return response.data;
//     }
   
// );

export const incrementAsyncAllProducts = createAsyncThunk(
    'checkProduct',
    async () => {
        const response = await axios.post(`http://localhost:8080/postWork`);
        console.log(response.data);
        
        return response.data;
    }
   
);
export const Delete = createAsyncThunk(
    'deleteProduct',
    async (givenId) => {
        console.log(givenId);
        const response = await axios.delete(`http://localhost:8080/deleteProduct?id=${givenId}`);
        console.log(response.data);
        
        return response.data;
    }
   
);

export const allProductsSlice = createSlice({
    name: "allProducts",
    initialState,
    reducers: {
        tryToAllProducts: (state) => {
            if(state.password == initialState.password){
                //Navigate(`/menu`);
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(incrementAsyncAllProducts.rejected, (state) => {
                state.status = "wrong";
                console.log("BruhX2");
            })
            .addCase(incrementAsyncAllProducts.pending, (state) => {
                state.status = "loading";
                console.log("WaitX2");
            })
            .addCase(incrementAsyncAllProducts.fulfilled, (state, action) => {
                console.log(action.payload);
                state.status = "good";
                state.arr = action.payload;
            });
    }

})

export const { tryToAllProducts } = allProductsSlice.actions;

export const selectStatus = (state) => state.allProducts.status;
export const selectArr = (state) => state.allProducts.arr;
// export const {userStatus} = initialState.status;

export default allProductsSlice.reducer;