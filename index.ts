import { Router, Request, Response } from "express";
import { Shop } from "./shopInterface";
import { shops } from "./shopsArray";

const app:Application = express();

const port = 3000

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/shopsArray", itemRouter);

app.listen(port, ():void => {
    console.log(`Listening on port ${port}`);

});