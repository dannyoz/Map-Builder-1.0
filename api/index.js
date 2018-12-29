var express = require("express");
var bodyParser = require("body-parser");
const js = express();
const fs = require("fs");

js.set("port", process.env.PORT || 5000);
js.use(bodyParser({ limit: "50mb" }));

js.post("/api/publish", (req, res) => {
  var path = req.body.path,
    fileName = req.body.fileName,
    data = JSON.stringify(req.body.map);

  const filePath = `${path}/${fileName}.json`;
  let writeStream = fs.createWriteStream(filePath);

  writeStream.write(data, (err) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send("map published");
    }
  });
});

js.get("/api/env", function(req, res) {
  res.status(200).send(process.env);
});

js.listen(js.get("port"), function() {
  console.log("Map builder app is running on port", js.get("port"));
});
