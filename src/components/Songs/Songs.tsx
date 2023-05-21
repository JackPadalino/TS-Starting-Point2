import React from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks";

const Songs = () => {
  const songs = useAppSelector((state) => state.songs.songs);
  //return <div></div>;
  return (
    <div>
      <h1>This is the Songs page.</h1>
      {songs.map((song) => {
        return (
          <p key={song.id}>
            {song.title} - {song.bpm} - {song.key}
          </p>
        );
      })}
    </div>
  );
};

export default Songs;
