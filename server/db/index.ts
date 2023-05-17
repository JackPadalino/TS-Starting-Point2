import Artist from "./models/Artist";
import Album from "./models/Album";
import Song from "./models/Song";
//import User from "./User";

Artist.hasMany(Album);
Album.belongsTo(Artist);

Album.hasMany(Song);
Song.belongsTo(Album);

export { Artist, Album, Song };
