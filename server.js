import express from "express";
import dbConnect from "./config/dbConfig.js";
import usersRoute from "./routes/users.route.js";
import tasksRoute from "./routes/tasks.route.js";
import dotenv from "dotenv";
dotenv.config();

dbConnect();

const app = express()
const port = 3000

app.use(express.json());
app.use(express.static("dist"));

app.use("/users", usersRoute);
app.use("/tasks", tasksRoute);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
