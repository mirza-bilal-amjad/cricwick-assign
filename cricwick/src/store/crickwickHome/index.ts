import {createSlice} from '@reduxjs/toolkit';

const initialState: any = {
    pageNUmber: 1,
    data: []
}

const cricwickHomePageSlice = createSlice({
    name: 'cricwickHomePage',
    initialState,
    reducers: {
        setDataIncCricwick: (state, action) => {
            if (!state.data.includes(action.payload)) {
                state.data.push(...action.payload);
                return state;
            } else
                return state;
        },
        setPageNumber: (state) => {
            console.log('setPageNumber')
            state.pageNUmber += 1;
        }
    },
});

export const {setDataIncCricwick, setPageNumber} = cricwickHomePageSlice.actions;

export const cricwickHomePageReducer = cricwickHomePageSlice.reducer;
