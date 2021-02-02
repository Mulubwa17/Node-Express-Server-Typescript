/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from 'express';
import { json, urlencoded } from "body-parser";
import cors from "cors";
import helmet from "helmet";
import connectDB from "./src/config/db";
import {Routes} from "./src/routes/User"

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
    process.exit(1);
 }
 
 const PORT: number = parseInt(process.env.PORT as string, 10);
 
 const app = express();

 /**
  * Connect database
  */
 connectDB();

/**
 *  App Configuration
 */

 app.use(helmet());
 app.use(cors());
 app.use(express.json());
 app.use(json());
app.use(urlencoded({
  extended: true
}));

 /**
 * Route Inialization
 */

app.use("/api/v1/user",new Routes().userRouter())
/**
 * Server Activation
 */

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });