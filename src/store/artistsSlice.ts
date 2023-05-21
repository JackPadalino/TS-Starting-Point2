import { createSlice } from "@reduxjs/toolkit";

export interface artistsInitialState {
  artists: [
    {
      name: string;
      genre: string;
    }
  ];
}

const initialState: artistsInitialState = {
  artists: [
    {
      name: "Undefined",
      genre: "Undefined",
    },
  ],
};

export const artistsSlice = createSlice({
  name: "artists",
  initialState,
  reducers: {
    setArtists: (state, action) => {
      state.artists = action.payload;
    },
  },
});

export const { setArtists } = artistsSlice.actions;
export default artistsSlice.reducer;
