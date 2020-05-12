
// express
import { NextFunction, Response, Request, Router } from "express";
// model
import {Memory, IMemory} from "../models/memory"


/**
 * @class MemoriesApi
 */
export class MemoriesApi {
    /**
     * Create the api.
     * @static
     */
    public static create(router: Router) {
        // DELETE
        router.delete("/memories/:id([0-9a-f]{24})", (req: Request, res: Response, next: NextFunction) => {
            new MemoriesApi().delete(req, res, next);
        });

        // GET
        router.get("/memories", (req: Request, res: Response, next: NextFunction) => {
            new MemoriesApi().list(req, res, next);
        });
        router.get("/memories/:id([0-9a-f]{24})", (req: Request, res: Response, next: NextFunction) => {
            new MemoriesApi().get(req, res, next);
        });

        // POST
        router.post("/memories", (req: Request, res: Response, next: NextFunction) => {
            new MemoriesApi().create(req, res, next);
        });

        // PUT
        router.put("/memories/:id([0-9a-f]{24})", (req: Request, res: Response, next: NextFunction) => {
            new MemoriesApi().update(req, res, next);
        });
    }

    /**
     * Create a new memory.
     * @param req {Request} The express request object.
     * @param res {Response} The express response object.
     * @param next {NextFunction} The next function to continue.
     */
    public create(req: Request, res: Response, next: NextFunction) {
        // create memory
        const memory = new Memory(req.body);
        memory.save().then(memory => {
            res.json(memory.toObject());
            next();
        }).catch(next);
    }

    /**
     * Delete a memory.
     * @param req {Request} The express request object.
     * @param res {Response} The express response object.
     * @param next {NextFunction} The next function to continue.
     */
    public delete(req: Request, res: Response, next: NextFunction) {
        // verify the id parameter exists
        const PARAM_ID: string = "id";
        if (req.params[PARAM_ID] === undefined) {
            res.sendStatus(404);
            next();
            return;
        }
        // get id
        const id: string = req.params[PARAM_ID];

        // get memory
        Memory.findById(id).then(memory => {

            // verify memory exists
            if (memory === null) {
                res.sendStatus(404);
                next();
                return;
            }

            memory.remove().then(() => {
                res.sendStatus(200);
                next();
            }).catch(next);
        }).catch(next);
    }


    /**
     * Get a memory.
     * @param req {Request} The express request object.
     * @param res {Response} The express response object.
     * @param next {NextFunction} The next function to continue.
     */
    public get(req: Request, res: Response, next: NextFunction) {
        // verify the id parameter exists
        const PARAM_ID: string = "id";
        if (req.params[PARAM_ID] === undefined) {
            res.sendStatus(404);
            next();
            return;
        }

        // get id
        const id: string = req.params[PARAM_ID];

        // get memory
        Memory.findById(id).then(memory => {

            // verify memory was found
            if (memory === null) {
                res.sendStatus(404);
                next();
                return;
            }

            // send json of memory object
            res.json(memory.toObject());
            next();
        }).catch(next);
    }

    /**
     * List all memories.
     * @param req {Request} The express request object.
     * @param res {Response} The express response object.
     * @param next {NextFunction} The next function to continue.
     */
    public list(req: Request, res: Response, next: NextFunction) {
        // get memories
        Memory.find().then(memories => {
            res.json(memories.map(memory => memory.toObject()));
            next();
        }).catch(next);
    }


    /**
     * Update a memory.
     * @param req {Request} The express request object.
     * @param res {Response} The express response object.
     * @param next {NextFunction} The next function to continue.
     */
    public update(req: Request, res: Response, next: NextFunction) {
        const PARAM_ID: string = "id";

        // verify the id parameter exists
        if (req.params[PARAM_ID] === undefined) {
            res.sendStatus(404);
            next();
            return;
        }

        // get id
        const id: string = req.params[PARAM_ID];

        // get memory
        Memory.findById(id).then(memory => {

            // verify memory was found
            if (memory === null) {
                res.sendStatus(404);
                next();
                return;
            }

            // save memory
            Object.assign(memory, req.body).save().then((memory: IMemory) => {
                res.json(memory.toObject());
                next();
            }).catch(next);
        }).catch(next);
    }

}

