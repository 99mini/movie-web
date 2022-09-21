const express = require("express");
const app = express();
const indexRouter = require("./Router/index");
const naverRouter = require("./Router/naver");

app.use("/api", indexRouter);
app.use("/api/naver", naverRouter);
const port = 5050;

app.listen(port, () => console.log(`run server port: ${port}`));
