import { Router, Response, Request } from "express";

class UserController {
  public path: string = "/users";
  public router: Router = Router();

  constructor() {
    this.init();
  }

  create = (req: Request, res: Response) => {
    const data = req.body;
    res.send(data);
  }

  private init() {
    this.router.get(this.path, this.create);
  }
}

export default UserController;
