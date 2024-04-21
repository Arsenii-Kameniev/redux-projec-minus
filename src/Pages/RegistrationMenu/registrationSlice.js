import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    status: 'idle',
    level: 0,
    name: '',
    password: '',
    age: 0,
};

export const incrementAsyncRegistration = createAsyncThunk(
    'getName',
    async (person) => {
        console.log(person);
        // const response = await axios.post(`http://localhost:8080/checkIfUserExist?name=${person}`);
        const response = await axios.post(`http://localhost:8080/checkIf`, {
            nickName: person.name,
            password: person.password,
            level: person.level,
            age: person.age
        });
        return response.data;
    }
);


export const registrationSlice = createSlice({
    name: "registration",
    initialState,
    reducers: {
        tryToregistration: (state) => {
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
            .addCase(incrementAsyncRegistration.rejected, (state) => {
                state.status = 'wrong';
                console.log("BruhX2");
            })
            .addCase(incrementAsyncRegistration.pending, (state) => {
                state.status = 'loading';
                console.log("WaitX2");
            })
            .addCase(incrementAsyncRegistration.fulfilled, (state, action) => {
                state.status = 'idle';
                console.log(action.payload);
                state.name = action.payload.nickName;
                state.password = action.payload.password;
                state.level = action.payload.level;
                state.age = action.payload.age;
            });
    }

})

export const { tryToregistration } = registrationSlice.actions;

export default registrationSlice.reducer;