import express from "express";
const router = express.Router();
//import authRouter from "./auth";
import songsRouter from "./songsRouter";
import albumsRouter from "./albumsRouter";
import artistsRouter from "./artistsRouter";

//router.use("/auth", authRouter);
router.use("/songs", songsRouter);
router.use("/albums", albumsRouter);
router.use("/artists", artistsRouter);

export default router;
