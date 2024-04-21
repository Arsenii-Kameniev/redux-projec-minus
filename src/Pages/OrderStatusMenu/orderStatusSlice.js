import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    status: 'idle',
    pId: 0,
    type: '',
};

export const incrementAsyncOrderStatus = createAsyncThunk(
    'getOrderStatus',
    async (orderStatus) => {
        console.log(orderStatus.pId);
        const response = await axios.post(`http://localhost:8080/postOrderStatusAdmin`, {
            pid: orderStatus.pId,
            type: orderStatus.type,
        });
        return response.data;
    }
);


export const orderStatusSlice = createSlice({
    name: "orderStatus",
    initialState,
    reducers: {
        tryToorderStatus: (state) => {
            if (state.password == initialState.password) {
                //Navigate(`/menu`);
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(incrementAsyncOrderStatus.rejected, (state) => {
                state.status = 'wrong';
                console.log("BruhX2");
            })
            .addCase(incrementAsyncOrderStatus.pending, (state) => {
                state.status = 'loading';
                console.log("WaitX2");
            })
            .addCase(incrementAsyncOrderStatus.fulfilled, (state, action) => {
                state.status = 'idle';
                state.pId = action.payload.pId;
                state.type = action.payload.type;
            });
    }

})

export const { tryToOrderStatus } = orderStatusSlice.actions;

export default orderStatusSlice.reducer;