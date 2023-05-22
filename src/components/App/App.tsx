import React, { useEffect } from "react";
import axios from "axios";
//import { useSelector, useDispatch } from "react-redux";
//import { RootState, AppDispatch } from "../../store";

import { useAppSelector, useAppDispatch } from "../../store/hooks";
import RouterComponent from "../../components/RouterComponent";
import { setArtists } from "../../store/artistsSlice";
import { setAlbums } from "../../store/albumSlice";
import { setSongs } from "../../store/songsSlice";
//import "./style.css";

const App = () => {
  const dispatch = useAppDispatch();
  //const { user } = useSelector((state) => state.user);

  const fetchArtists = async () => {
    const response = await axios.get("/api/artists");
    dispatch(setArtists(response.data));
  };

  const fetchAlbums = async () => {
    const response = await axios.get("/api/albums");
    dispatch(setAlbums(response.data));
  };

  const fetchSongs = async () => {
    const response = await axios.get("/api/songs");
    dispatch(setSongs(response.data));
  };

  useEffect(() => {
    fetchArtists();
    fetchAlbums();
    fetchSongs();
  }, []);

  return (
    <div className="component">
      <RouterComponent />
    </div>
  );
};

export default App;
