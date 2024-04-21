import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    status: 'idle',
    name: '',
    company: '',
    fullPrice: 0,
    categoryId: 0,
};

export const incrementAsyncProduct = createAsyncThunk(
    'getProduct',
    async (product) => {
        console.log("dffs");
        console.log(product);
        console.log(product.fullPrice);
        const response = await axios.post(`http://localhost:8080/postItem`, {
            name: product.name,
            company: product.company,
            fullPrice: product.fullPrice,
            categoryId: product.categoryId,
        });
        
        return response.data;
    }
);


export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        tryToproduct: (state) => {
            if (state.password == initialState.password) {
                //Navigate(`/menu`);
            }
        }
    },
    extraReducers: (builder) => {
        builder
            // .addCase(incrementAsync.rejected, (state) => {
            //     state.status = 'wrong';
            //     console.log("Bruh");
            // })
            // .addCase(incrementAsync.pending, (state) => {
            //     state.status = 'loading';
            //     console.log("Wait");
            // })
            // .addCase(incrementAsync.fulfilled, (state, action) => {
            //     state.status = 'idle';
            //     console.log(action.payload);
            //     console.log("Hi");
            //     state.name = action.payload.nickName;
            //     state.password = action.payload.password;
            // })
            .addCase(incrementAsyncProduct.rejected, (state) => {
                state.status = 'wrong';
                console.log("BruhX2");
            })
            .addCase(incrementAsyncProduct.pending, (state) => {
                state.status = 'loading';
                console.log("WaitX2");
            })
            .addCase(incrementAsyncProduct.fulfilled, (state, action) => {
                state.status = 'idle';
                state.name = action.payload.name;
                state.company = action.payload.company;
                state.fullPrice = action.payload.fullPrice;
            });
    }

})

export const { tryToproduct } = productSlice.actions;

export default productSlice.reducer;