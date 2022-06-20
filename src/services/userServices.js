import * as authService from './authServices.js';

const baseUrl = 'http://localhost:3030/users';


export const login = (email, password) => {
    return fetch(`${baseUrl}/login`, {
       method: 'POST',
       headers: {
           'content-type': 'application/json'
       },
       body: JSON.stringify({email, password})
   })
   .then(res => res.json())
   .then(user => {authService.saveUser(user)
   
   return user
   }
   )}


   

   export const register = (email, password) => {
    return fetch(`${baseUrl}/register`, {
       method: 'POST',
       headers: {
           'content-type': 'application/json'
       },
       body: JSON.stringify({email, password})
   })
   .then(res => res.json())
   .then(user => {authService.saveUser(user)
   
   return user
   }
   )}



   export const logout = () =>
  fetch(`${baseUrl}/logout`, {
    headers: { 'X-Authorization': authService.getToken() }
  }).then(() => {
    authService.clearUser();
  });
