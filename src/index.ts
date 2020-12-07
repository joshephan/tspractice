import * as express from "express";
import * as mongoose from "mongoose";
import config from "./config";
import { json } from "body-parser";

class App {
  public application: express.Application;

  constructor() {
    this.application = express();
  }
}

const app = new App().application;

app.use(json()); // body-parser

mongoose.connect(config.mongodb, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => {
  console.log("connected to database");
});

app.get("/", (req: express.Request, res : express.Response) => {
  res.send("start");
})

app.listen(4000, () => {
  console.log("server start");
});