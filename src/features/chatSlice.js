import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    roomId: null,
};

export const chatSlice = createSlice({
    name: "chat",
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        enterRoom: (state, action) => {
            state.value = action.payload.roomId;
        },
    },
});

export const { enterRoom } = chatSlice.actions;

export const selectRoomId = (state) => state.chat.roomId;

export default chatSlice.reducer;
