import { Router, Response, Request, NextFunction } from "express";
import UserService from "./service";
import { UserDTO } from "./user";
import HttpException from "../../exceptions/exception";
import { isUUID } from "class-validator";
import { validationPipe } from "../../common/validation";
import { ErrorCode } from "../../exceptions/code";

class UserController {
  public path: string = "/users";
  public router: Router = Router();
  private service = new UserService();

  constructor() {
    this.init();
  }

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const dto = await validationPipe(UserDTO, { ...req.body }).catch(
        (errors) => {
          next(new HttpException(ErrorCode.BadRequest, "Bad request", errors));
          return;
        }
      );

      const user = await this.service.create(dto);

      res.send(user);
    } catch (error) {
      next(error);
    }
  };

  findAll = async (_: Request, res: Response, next: NextFunction) => {
    try {
      const list = await this.service.findAll();

      res.send(list);
    } catch (error) {
      next(error);
    }
  };

  findOne = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id;

      if (!isUUID(id)) {
        next(new HttpException(ErrorCode.BadRequest, `Invalid uuid ${id}`));
        return;
      }

      const user = await this.service.findOne(id);

      if (user) res.send(user);
      else next(new HttpException(ErrorCode.NotFound, `No user found for this id ${id}`));
    } catch (error) {
      next(error);
    }
  };

  private init() {
    this.router.get(this.path, this.findAll);
    this.router.get(`${this.path}/:id`, this.findOne);
    this.router.post(this.path, this.create);
  }
}

export default UserController;
