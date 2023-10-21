import {createSlice, Draft, PayloadAction} from '@reduxjs/toolkit';
import {removeDuplicate} from "../../utils/method";

const initialState = {
    flag: false
}


const toggleSlice = createSlice({
    name: 'toggleData',
    initialState,
    reducers: {
        toggleFlag: (state) => {
            state.flag = !state.flag
        },

    },
});

export const {toggleFlag} = toggleSlice.actions;

export const toggleReducer = toggleSlice.reducer;
