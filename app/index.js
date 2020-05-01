import express from "express";
import connectDB from "./config/connectDB";
import initRoutes from "./routes/web";
import configViewEngine from "./config/viewEngine";
import bodyParser from "body-parser";

let app = express();
let port = 3000;

connectDB();
configViewEngine(app);
app.use(bodyParser.urlencoded({extended: true}));
initRoutes(app);

app.listen(port, () => {
  console.log("Port 3000 is running");
});