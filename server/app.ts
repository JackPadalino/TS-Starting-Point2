import express, { Express, Request, Response } from "express";
import path from "path";
import morgan from "morgan";
import apiRouter from "./api";

const app: Express = express();

// Set up middleware
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "static")));
app.use(express.urlencoded({ extended: false }));
// Consider setting this ^ to true for React forms?
// The extended: false option specifies how the values
// are parsed.When set to false, the querystring library
// is used to parse the data, and the resulting parsed
// object does not support nested objects.If extended
// were set to true, the qs library would be used instead,
// which supports nested objects.

// Set up routes
app.use("/api", apiRouter);

// Pass back everything else / front-end
app.use("/dist", express.static(path.join(__dirname, "../dist")));
app.use("/static", express.static(path.join(__dirname, "../static")));

// Set up route for home page
app.get("/", (req: Request, res: Response) =>
  res.sendFile(path.join(__dirname, "../static/index.html"))
);

// Handle all other routes with React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../static/index.html"));
});

export default app;
