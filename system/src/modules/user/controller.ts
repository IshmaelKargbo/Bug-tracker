import { Router, Response, Request, NextFunction } from "express";
import UserService from "./service";
import { UserDTO } from "./user";
import HttpException from "../../middleware/exceptions/exceptions";
import { isUUID } from "class-validator";

class UserController {
  public path: string = "/users";
  public router: Router = Router();
  private service = new UserService();

  constructor() {
    this.init();
  }

  create = async (req: Request, res: Response) => {
    const dto = req.body;
    
    const user = await this.service.create(dto);

    res.send(user);
  };

  findAll = async (_: Request, res: Response) => {
    const list = await this.service.findAll();

    res.send(list);
  };

  findOne = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    if (!isUUID(id)) {
      next(new HttpException(400, `Invalid uuid ${id}`));
      return;
    }

    this.service.findOne(id).then((user) => {
      if (user) res.send(user);
      else next(new HttpException(404, `No user found for this id ${id}`));
    });
  };

  private init() {
    this.router.get(this.path, this.findAll);
    this.router.get(`${this.path}/:id`, this.findOne);
    this.router.post(this.path, this.create);
  }
}

export default UserController;
