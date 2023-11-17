import {createSlice, Draft, PayloadAction} from '@reduxjs/toolkit';

const initialState: object = [];

const carouselSlice = createSlice({
    name: 'carouselData',
    initialState,
    reducers: {
        addToCarousel: (state: Draft<any>, action: PayloadAction<any>) => {
            return [action.payload];
        },

    },
});

export const {addToCarousel} = carouselSlice.actions;

export const carouselReducer = carouselSlice.reducer;
