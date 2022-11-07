import { Router } from "express";
import RoomController from "../controllers/room.controller";
import { tenantAuth } from "../middlewares/tenantAuth.middleware";

const route = Router();

route.get("/rooms/index", new RoomController().index);
route.post("/rooms/create", tenantAuth, new RoomController().create);
route.get("/rooms/show/:id", new RoomController().show);
route.put("/rooms/update/:id", tenantAuth, new RoomController().update);
route.delete("/rooms/delete/:id", new RoomController().delete);

export default route;
