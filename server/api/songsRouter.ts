import express, { Request, Response, NextFunction } from "express";
import { Song, Artist, Album } from "../db";
import { SongModelAttributes } from "../db/models/Song";
import { ArtistModelAttributes } from "../db/models/Artist";
import { AlbumModelAttributes } from "../db/models/Album";
const router = express.Router();

// GET /api/songs
router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const allSongs: SongModelAttributes[] = await Song.findAll();
    if (!allSongs) {
      res.sendStatus(404);
    } else {
      res.send(allSongs);
    }
  } catch (err) {
    res.sendStatus(404);
    next(err);
  }
});

export default router;
