import { configureStore } from "@reduxjs/toolkit";
//import userReducer from "./userSlice";
import artistsReducer from "./artistsSlice";
import albumsReducer from "./albumSlice";
import songsReducer from "./songsSlice";

const store = configureStore({
  reducer: {
    //user: userReducer,
    artists: artistsReducer,
    albums: albumsReducer,
    songs: songsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
