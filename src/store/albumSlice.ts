import { createSlice } from "@reduxjs/toolkit";

export interface albumsInitialState {
  albums: [
    {
      id: number;
      title: string;
    }
  ];
}

const initialState: albumsInitialState = {
  albums: [
    {
      id: 0,
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
