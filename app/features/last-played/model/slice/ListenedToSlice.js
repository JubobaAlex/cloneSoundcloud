const { createSlice } = require("@reduxjs/toolkit");

const listenedToSlice = createSlice({
    name: "listenedTo",
    initialState: {
        musicData: []
    },
    reducers: {
        addListenedItem: (state, action) => {
            const track = action.payload;
            const isAlreadyInList = state.musicData.some(
                existingTrack => existingTrack.id === track.id
            );
            
            if (!isAlreadyInList) {
                state.musicData = [track,...state.musicData];
            }

            if(state.musicData.length > 4) {
                state.musicData.pop()
            }
        }
    }
})

export const { addListenedItem } = listenedToSlice.actions;
export default listenedToSlice.reducer;