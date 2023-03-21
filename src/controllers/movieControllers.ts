import { Request, Response } from "express";

//Model
import { MovieModel } from "../models/movies";

//Logger
import Logger from "../../config/logger";

export async function createMovie(req: Request, res: Response) {
    return res.status(200).send("Deu certo o controller");
}