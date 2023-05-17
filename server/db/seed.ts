import db from "./db";
//import User from "./User";
import { Album, Artist, Song } from ".";

// All artists
interface artist {
  name: string;
  genre: string;
}

// All albums
interface album {
  title: string;
}

// All Songs
interface song {
  title: string;
  bpm: number;
  key: string;
}

const songs: song[] = [
  { title: "Quantum", bpm: 132, key: "5A" },
  { title: "Headrush", bpm: 130, key: "6B" },
  { title: "Go With the Flow", bpm: 145, key: "5A" },
];

const seed = async () => {
  console.log("Starting seed...");
  await db.sync({ force: true });
  try {
    console.log("adding artists");

    const artists: artist[] = [
      { name: "Filterheadz", genre: "Peak Time/Driving Techno" },
      { name: "Anthony Parasole", genre: "Peak Time/Driving Techno" },
      { name: "Jastice", genre: "Industrial Techno" },
    ];

    const [filterHeadz, anthonyParasole, jastice] = await Promise.all(
      artists.map((artist) => Artist.create(artist))
    );

    console.log("adding albums");

    const albums: album[] = [
      { title: "Quantum EP" },
      { title: "Full EFX" },
      { title: "Acceleration Series" },
    ];

    const [filterHeadzAlbum, parasoleAlbum, jasticeAlbum] = await Promise.all(
      albums.map((album) => Album.create(album))
    );

    console.log("adding songs");
    const [quantumSong, headrushSong, goWithTheFlowSong] = await Promise.all(
      songs.map((song) => Song.create(song))
    );

    //@ts-ignore
    filterHeadz.addAlbums(filterHeadzAlbum);
    //@ts-ignore
    filterHeadzAlbum.addSongs(quantumSong);
    //@ts-ignore
    anthonyParasole.addAlbums(parasoleAlbum);
    //@ts-ignore
    parasoleAlbum.addSongs(headrushSong);
    //@ts-ignore
    jastice.addAlbums(jasticeAlbum);
    //@ts-ignore
    jasticeAlbum.addSongs(goWithTheFlowSong);

    // const prototypeMethods = Object.getOwnPropertyNames(
    //   Object.getPrototypeOf(filterHeadz)
    // );

    // console.log(prototypeMethods);
  } catch (err) {
    console.log(err);
  }

  console.log("Seed complete!");
};

seed();
