import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
    name: "av",
    initialState: [
        {
            img: "/projector_woman-7136446_1280.jpg",
            name: "Projectors",
            cost: 200,
            quantity: 0,
	},
	{
            img: "/speaker-971975_1280.png",
            name: "Speaker",
            cost: 35,
            quantity: 0,
	},
	{
            img: "/microphone-5340340_1280.jpg",
            name: "Microphones",
            cost: 45,
            quantity: 0,
	},
	{
            img: "/white-board-593309_1280.jpg",
            name: "Whiteboards",
            cost: 80,
            quantity: 0,
	},

	{
            img: "/signage_work-harder-1845901_1280.jpg",
            name: "Signage",
            cost: 80,
            quantity: 0,
	},
    ],


    reducers: {
	incrementAvQuantity: (state, action) => {
	    const item = state[action.payload];
	    if (item) {
		item.quantity++;
	    }
	},
	decrementAvQuantity: (state, action) => {
	    const item = state[action.payload];
	    if (item && item.quantity > 0) {
		item.quantity--;
	    }
	},
    },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
