import { Router } from "express";
import RoomController from "../controllers/room.controller";

const route = Router();

route.get("/rooms/index", new RoomController().index);
route.post("/rooms/create", new RoomController().create);
route.get("/rooms/show/:id", new RoomController().show);
route.put("/rooms/update/:id", new RoomController().update);
route.delete("/rooms/delete/:id", new RoomController().delete);

export default route;
