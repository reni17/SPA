import * as userService from '../service/userServices.js';

export const logoutView = async ctx => {
  userService.logout().then(() => {
    ctx.page.redirect('/');
  });
};
