import React from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks";

const Albums = () => {
  const albums = useAppSelector((state) => state.albums.albums);
  //return <div></div>;
  return (
    <div>
      <h1>This is the albums page.</h1>
      {albums.map((album) => {
        return <p key={album.id}>{album.title}</p>;
      })}
    </div>
  );
};

export default Albums;
