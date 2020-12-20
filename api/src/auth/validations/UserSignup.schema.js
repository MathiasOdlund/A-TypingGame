import Joi from '@hapi/joi';

export const UserSignupSchema = Joi.object({
  email: Joi.string().email().required("Email is required"),
  username: Joi.string().min(5).max(15).required("Username is required"),
  password: Joi.string().min(7).required("Password is required"),
})