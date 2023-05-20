import { createSlice } from "@reduxjs/toolkit";

export interface albumsInitialState {
  albums: [
    {
      title: string;
    }
  ];
}

const initialState: albumsInitialState = {
  albums: [
    {
      title: "Undefined",
    },
  ],
};

export const albumsSlice = createSlice({
  name: "albums",
  initialState,
  reducers: {
    setAlbums: (state, action) => {
      state.albums = action.payload;
    },
  },
});

export const { setAlbums } = albumsSlice.actions;
export default albumsSlice.reducer;
