import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    status: 'idle',
    number: '',
    company: '',
    name: '',
    surname: '',
    data: '',
    cvv: ''
};

export const incrementAsyncCard = createAsyncThunk(
    'getCard',
    async (card) => {
        console.log(card);
        // const response = await axios.post(`http://localhost:8080/checkIfUserExist?name=${person}`);
        const response = await axios.post(`http://localhost:8080/checkCard`, {
            number: card.number,
            company: card.company,
            name: card.name,
            surname: card.surname,
            data: card.data,
            cvv: card.cvv
        });
        return response.data;
    }
);


export const cardSlice = createSlice({
    name: "card",
    initialState,
    reducers: {
        tryTocard: (state) => {
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
            .addCase(incrementAsyncCard.rejected, (state) => {
                state.status = 'wrong';
                console.log("BruhX2");
            })
            .addCase(incrementAsyncCard.pending, (state) => {
                state.status = 'loading';
                console.log("WaitX2");
            })
            .addCase(incrementAsyncCard.fulfilled, (state, action) => {
                state.status = 'idle';
                console.log(action.payload);
                state.number = action.payload.number;
                state.name = action.payload.name;
                state.surname = action.payload.surname;
                state.data = action.payload.data;
                state.cvv = action.payload.cvv;
                state.company = action.payload.company;
            });
    }

})

export const { tryTocard } = cardSlice.actions;

export default cardSlice.reducer;