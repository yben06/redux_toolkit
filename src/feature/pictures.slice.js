import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRandomNumber = createAsyncThunk(
    'numbers/fetchRandomNumber',
    async (data, thunkAPI) => {
      const response = await fetch('/api/randomnumber');
      return await response.json();
    }
  );

export const picturesSlice = createSlice({
    name: "pictures",
    initialState: {
        pictures: null,
    },
    reducers: {
        setPicturesData: (state, { payload }) => {
            state.pictures = payload;
        },
        addPicture: (state, { payload }) => {
            state.pictures.push(payload);
        },
        editPicture: (state, { payload }) => {
            state.pictures = state.pictures.map((pic) => {
                if (pic.id === payload[1]) {
                    return {
                        ...pic,
                        artist: payload[0],
                    };
                } else {
                    return pic;
                }
            });
        },
        deletePicture: (state, { payload }) => {
            state.pictures = state.pictures.filter((pic) => pic.id !== payload);
        },
    },
});

export const { setPicturesData, addPicture, editPicture, deletePicture } = picturesSlice.actions;
export default picturesSlice.reducer;