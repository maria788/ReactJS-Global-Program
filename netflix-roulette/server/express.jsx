import express from "express";
import fs from "fs";
import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server.js";
import { StaticRouter } from "react-router-dom/server";
import App from "../src/App.tsx";

const app = express();

app.get(
  /\.(js|css|map|ico|png)$/,
  express.static(path.resolve(__dirname, "../dist"))
);

app.use("/", (req, res) => {
  const context = {};
  const app = ReactDOMServer.renderToString(
    <App context={context} location={req.url} Router={StaticRouter} />
  );

  const indexFile = path.resolve("./dist/index.html");
  fs.readFile(indexFile, "utf8", (err, data) => {
    if (err) {
      console.error("Something went wrong:", err);
      return res.status(500).send("Oops, better luck next time!");
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    );
  });
});

app.use(express.static("./dist"));

app.listen("9000", () => {
  console.log("Express server started at <http://localhost:9000>");
});
