const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3000;

app.get("/mlanalytics", (req, res) => {
  fs.readFile("./analytics.html", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      res.status(500).send("Internal Server Error");
      return;
    }
    res.setHeader("Content-Type", "text/html");
    res.send(data);
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/mlanalytics`);
});
