import express from "express";
import dbConnect from "./config/dbConfig.js";
import usersRoute from "./routes/users.route.js";
import tasksRoute from "./routes/tasks.route.js";

import * as path from "path";
const rootPath = process.cwd();

// import dotenv from "dotenv";

dotenv.config();

dbConnect();

const app = express()
const port = 3000

app.use(express.json());
app.use(express.static("dist"));

app.get("/{any}", () => {
    res.sendfile(path.join(rootpath, "public", "index.html"));
})

app.use("/users", usersRoute);
app.use("/tasks", tasksRoute);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})