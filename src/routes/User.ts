import { Router} from 'express';
import { UserController } from "../controller/UserController";



export class Routes {
    userController: UserController = new UserController()

    router: Router = Router();

    userRouter(): Router {
        this.router.post("/register",this.userController.newUser);
        this.router.get("/profile/:_id",this.userController.getUser);
        this.router.get("/list",this.userController.getUsers);
        this.router.put("/update/:_id",this.userController.updateUser);
        this.router.delete("/delete/:_id",this.userController.deleteUser);
        return this.router;
    }
}