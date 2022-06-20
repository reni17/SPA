import * as authService from './authServices.js'
const createUrl = 'http://localhost:3030/data/pets'



export const create = ( petData
) => {
  

    return fetch(createUrl, {
       method: 'POST',
       headers: {
           'content-type': 'application/json',
           'X-Authorization': authService.getToken()
       },
       body: JSON.stringify(
      petData
      
      )
   })
   .then(res => res.json())
   }