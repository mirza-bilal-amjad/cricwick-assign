import {createSlice, Draft, PayloadAction} from '@reduxjs/toolkit';
import {removeDuplicate} from "../../utils/method";

const initialState = {
    flag: false,
    index: 0,

}


const toggleSlice = createSlice({
    name: 'toggleData',
    initialState,
    reducers: {
        toggleFlag: (state) => {
            state.flag = !state.flag
        },
        setIndexNumber: (state, action) => {
            console.log('index', action.payload)
            return {
                ...state, index: action.payload
            }
        }
    },
});

export const {toggleFlag, setIndexNumber} = toggleSlice.actions;

export const toggleReducer = toggleSlice.reducer;
