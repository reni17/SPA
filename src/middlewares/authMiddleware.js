import * as authService from '../service/authServices.js';

export const authMiddleware = (ctx, next) => {
  ctx.user = authService.getUser();

  next();
};
