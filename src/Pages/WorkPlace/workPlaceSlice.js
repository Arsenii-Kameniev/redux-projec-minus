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

export const incrementAsyncWorkPlace = createAsyncThunk(
    'checkWork',
    async () => {
        const response = await axios.post(`http://localhost:8080/postWork`);
        console.log(response.data);
        
        return response.data;
    }
   
);
export const Delete = createAsyncThunk(
    'deleteWork',
    async (givenId) => {
        console.log(givenId);
        const response = await axios.delete(`http://localhost:8080/deleteProduct?id=${givenId}`);
        console.log(response.data);
        
        return response.data;
    }
   
);
//!!!!!!!!!
export const Update = createAsyncThunk(
    'updateWork',
    async (givenId) => {
        console.log(givenId);
        const response = await axios.put(`http://localhost:8080/updateProduct?`,{
            
        });
        console.log(response.data);
        
        return response.data;
    }
   
);
export const Put = createAsyncThunk(
    'putWork',
    async (newProduct) => {
        console.log(newProduct);
        const response = await axios.put(`http://localhost:8080/putProductInWork`,{
            name: newProduct.name,
            company: newProduct.company,
            partlyPrice: newProduct.partlyPrice,
            fullPrice: newProduct.fullPrice,
            category: newProduct.category,
            
        });
        console.log(response.data);
        
        return response.data;
    }
   
);

export const workPlaceSlice = createSlice({
    name: "workPlace",
    initialState,
    reducers: {
        tryToworkPlace: (state) => {
            if(state.password == initialState.password){
                //Navigate(`/menu`);
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(incrementAsyncWorkPlace.rejected, (state) => {
                state.status = "wrong";
                console.log("BruhX2");
            })
            .addCase(incrementAsyncWorkPlace.pending, (state) => {
                state.status = "loading";
                console.log("WaitX2");
            })
            .addCase(incrementAsyncWorkPlace.fulfilled, (state, action) => {
                console.log(action.payload);
                state.status = "good";
                state.arr = action.payload;
            });
    }

})

export const { tryToWorkPlace } = workPlaceSlice.actions;

export const selectStatus = (state) => state.workPlace.status;
export const selectArr = (state) => state.workPlace.arr;
// export const {userStatus} = initialState.status;

export default workPlaceSlice.reducer;