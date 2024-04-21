import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    status: "idle",
    name: '',
    password: '',
    access: false,
};

// export const incrementAsync = createAsyncThunk(
//     'getUser',
//     async (nick) => {
//         const response = await axios.get(`http://localhost:8080/postUserByNickName?name=${nick}`);
//         return response.data;
//     }
   
// );

export const incrementAsyncLogin = createAsyncThunk(
    'checkUser',
    async (user) => {
        console.log(user.name);
        console.log(user.password);
        const response = await axios.post(`http://localhost:8080/checkUser`,{
            name: user.name,
            password: user.password
        });
        
        return response.data;
    }
   
);

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        tryToLogin: (state) => {
            if(state.password == initialState.password){
                //Navigate(`/menu`);
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(incrementAsyncLogin.rejected, (state) => {
                state.status = "wrong";
                state.access = false;
                console.log("BruhX2");
            })
            .addCase(incrementAsyncLogin.pending, (state) => {
                state.status = "loading";
                state.access = false;
                console.log("WaitX2");
            })
            .addCase(incrementAsyncLogin.fulfilled, (state, action) => {
                state.status = "good";
                state.access = true;
                //console.log(state.access);
                console.log(action.payload);
                state.name = action.payload.nickName;
                state.password = action.payload.password;
            });
    }

})

export const { tryToLogin } = loginSlice.actions;

export const selectStatus = (state) => state.login.status;
export const selectAccess = (state) => state.login.access;
// export const {userStatus} = initialState.status;

export default loginSlice.reducer;