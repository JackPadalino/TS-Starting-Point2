import { createSlice } from "@reduxjs/toolkit";

export interface songsInitialState {
  songs: [
    {
      title: string;
      bpm: number;
      key: string;
    }
  ];
}

const initialState: songsInitialState = {
  songs: [
    {
      title: "Undefined",
      bpm: 0,
      key: "Undefined",
    },
  ],
};

export const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    setSongs: (state, action) => {
      state.songs = action.payload;
    },
  },
});

export const { setSongs } = songsSlice.actions;
export default songsSlice.reducer;
