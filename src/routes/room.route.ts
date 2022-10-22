import { Router } from "express";
import RoomController from "../controllers/room.controller";

const multer = require("multer");

var storage = multer.diskStorage({
  destination: "./storage/uploads/",
  filename: function (req, file, cb) {
    cb(null, `${file.originalname}`);
  },
});

var upload = multer({ storage: storage });

const route = Router();

route.get("/rooms/index", new RoomController().index);
route.post("/rooms/create", upload.array("files"), new RoomController().create);
route.get("/rooms/show/:id", new RoomController().show);
route.put("/rooms/update/:id", new RoomController().update);
route.delete("/rooms/delete/:id", new RoomController().delete);

export default route;
