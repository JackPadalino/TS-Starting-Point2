import express, { Express, Request, Response } from "express";
import path from "path";
import morgan from "morgan";
import apiRouter from "./api";

const router: Express = express();

// Set up middleware
router.use(morgan("tiny"));
router.use(express.json());
router.use(express.urlencoded({ extended: false }));
// Consider setting this ^ to true for React forms?
// The extended: false option specifies how the values
// are parsed.When set to false, the querystring library
// is used to parse the data, and the resulting parsed
// object does not support nested objects.If extended
// were set to true, the qs library would be used instead,
// which supports nested objects.

// Set up routes
router.use("/api", apiRouter);

// Pass back everything else / front-end
router.use("/dist", express.static(path.join(__dirname, "../dist")));
router.use("/static", express.static(path.join(__dirname, "../static")));
router.get("/", (req: Request, res: Response) =>
  res.sendFile(path.join(__dirname, "../static/index.html"))
);

export default router;
