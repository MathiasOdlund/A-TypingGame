import Joi from '@hapi/joi';

export const UserLoginSchema = Joi.object({
  email: Joi.string().email().required("Email is required"),
  password: Joi.string().min(7).required("Password is required"),
})