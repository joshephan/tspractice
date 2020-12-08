import * as express from "express";
import * as mongoose from "mongoose";
import { json } from "body-parser";

import config from "./config";
import UserModal from "./mongo/model/User";

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
  new UserModal({
    email: "joshephan0204@gmail.com",
    pw: "abcde"
  });
  res.send("visit index");
})

app.listen(4000, () => {
  console.log("server start");
});