import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    status: 'idle',
    payment: 0,
    statusId: 0,
    productId: 0,
};

export const incrementAsyncOrder = createAsyncThunk(
    'getOrder',
    async (order) => {
        console.log(order);
        const response = await axios.post(`http://localhost:8080/postPay`, {
            payment: order.payment,
            statusId: order.statusId,
            productId: order.productId,
        });
        
        return response.data;
    }
);


export const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        tryToorder: (state) => {
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
            .addCase(incrementAsyncOrder.rejected, (state) => {
                state.status = 'wrong';
                console.log("BruhX2");
            })
            .addCase(incrementAsyncOrder.pending, (state) => {
                state.status = 'loading';
                console.log("WaitX2");
            })
            .addCase(incrementAsyncOrder.fulfilled, (state, action) => {
                state.status = 'idle';
                state.payment = action.payload.payment;
                state.statusId = action.payload.status;
                state.productId = action.payload.productId;
            });
    }

})

export const { tryToOrder } = orderSlice.actions;

export default orderSlice.reducer;