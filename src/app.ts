import express, { Application, json } from "express"
import "express-async-errors"
import handleErrors from "./middlewares/handleErrors"
import { projectRouter } from "./routers/projects.routes"
import { developerRouter } from "./routers/developers.routes"
import { sessionRouter } from "./routers/session.routes"

const app: Application = express()
app.use(json())

app.use("/developers", developerRouter);
app.use("/login", sessionRouter);
app.use("/projects", projectRouter);

app.use(handleErrors)

export  default app