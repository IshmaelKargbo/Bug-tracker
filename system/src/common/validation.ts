import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
export * from "class-validator";

export const validationPipe = async (cls: any, data: object) => {
  const model: any = plainToClass(cls, data);
  const res = await validate(model, { validationError: { target: false } });

  const errors = res.map((error: any) => ({
    property: error.property,
    message: error.constraints[Object.keys(error.constraints)[0]],
  }));

  if (errors.length > 0) throw errors;

  return model;
};
