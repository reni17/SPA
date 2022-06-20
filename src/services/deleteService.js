import * as authService from './authServices.js'
const deleteUrl = 'http://localhost:3030/data/pets'

export const deleteItem = (id) => {

    return fetch(`${deleteUrl}/${id}`, {
       method: 'DELETE',
       headers: {
           'content-type': 'application/json',
           'X-Authorization': authService.getToken()
       }
   })
   .then(res => res.json())
    
   }