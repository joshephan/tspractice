import * as express from "express";
import * as mongoose from "mongoose";
import { json } from "body-parser";
import { ApolloServer } from "apollo-server-express";
import config from "./config";
import UserModal from "./mongo/model/User";
import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";
class App {
  public application: express.Application;

  constructor() {
    this.application = express();
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    endpoint: `http://localhost:4000/graphql`,
  }
});

const app = new App().application;

app.use(json()); // body-parser
server.applyMiddleware({ app, path: "/graphql" });

mongoose.connect(
  config.mongodb,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("connected to database");
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "DB connection error"));

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello world");
});

app.listen(4000, () => {
  console.log("server start");
});
