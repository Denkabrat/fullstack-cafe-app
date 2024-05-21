import {
    createSlice,
    createAsyncThunk
} from "@reduxjs/toolkit";
import {
    addToCart,
    getCart
} from "../../services/basketAPI";

const initialState = {
    userCart: {
        totalPrice: 0,
        userCart: []
    },
    status: "pending",
}

export const getUserCartFromBackEnd = createAsyncThunk("cartSlice/getUserCartFromBackEnd", async (_, {
    rejectWithValue
}) => {
    try {
        return await getCart();
    } catch (error) {
        return rejectWithValue(`${error}`);
    }
});

export const addToUserCart = createAsyncThunk("cartSlice/addToUserCart", async (goodId, {
    rejectWithValue
}) => {
    try {
        await addToCart({goodId});

        const serverCart = getCart();

        return serverCart;
    } catch (error) {
        return rejectWithValue(`${error}`);
    }
});

const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
        .addCase(getUserCartFromBackEnd.pending, state => {
            state.status = "pending";
        })
        .addCase(getUserCartFromBackEnd.fulfilled, (state, action) => {
            state.status = "fulfilled";
            state.userCart = action.payload;
        })
        .addCase(addToUserCart.pending, state => {
            state.status = "pending";
        })
        .addCase(addToUserCart.fulfilled, (state, action) => {
            state.status = "fulfilled";
            state.userCart = action.payload;
        })
});

export default cartSlice.reducer;