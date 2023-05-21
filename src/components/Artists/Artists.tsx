import React from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks";

const Artists = () => {
  const artists = useAppSelector((state) => state.artists.artists);
  //return <div></div>;
  return (
    <div>
      <h1>This is the Artists page.</h1>
      {artists.map((artist) => {
        return <p key={artist.id}>{artist.name}</p>;
      })}
    </div>
  );
};

export default Artists;
