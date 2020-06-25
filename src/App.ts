import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as express from "express";
import * as helmet from "helmet";
import * as morgan from "morgan";
import Routes from "./infrastructure/Routes";
import * as errorHandler from "./helpers/errorHandler";
import CONFIG from "./config/config";
import { createConnection, ConnectionOptions, DatabaseType } from "typeorm";
import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";
// import "./config/db";

export class App {
  public express: express.Application;
  private config: { db: MysqlConnectionOptions; port: string };
  private db;

  constructor() {
    this.config = {
      port: CONFIG.port,
      db: {
        ...CONFIG.db,
        type: (CONFIG.db.type as any) as "mariadb",
      },
    };

    this.express = express();
    this.setMiddlewares();
    this.setRoutes();
    this.catchErrors();
  }

  public async run() {
    this.db = await createConnection(this.config.db);

    await new Promise((resolve, reject) => {
      this.express.listen(Number(this.config.port), (err) => {
        if (err) {
          return console.log(err);
          reject();
        }

        console.log(`Server is listening on ${this.config.port}`);
        resolve();
      });
    });
  }

  private setMiddlewares(): void {
    this.express.use(cors());
    this.express.use(morgan("dev"));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
    this.express.use(helmet());
  }

  private setRoutes(): void {
    this.express.use("/v1", Routes);
  }

  private catchErrors(): void {
    this.express.use(errorHandler.notFound);
    this.express.use(errorHandler.internalServerError);
  }
}
