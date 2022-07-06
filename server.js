import express from "express";
require("dotenv").config();
import router from "./routes/auth";
import router from './routes/token';

const app = express();


app.use(express.json());

app.use("/api/v1", router);
app.use("/api/v1/refreshToken", router);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));