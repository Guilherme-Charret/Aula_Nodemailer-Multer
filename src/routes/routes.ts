const {Router} = require("express");
import UsuarioController from "../controllers/usuarioController";
import { photoUpload } from "../config/uploader";

const router = Router();

router.post("/usuarios/img", photoUpload.single("image"))

export default router;

