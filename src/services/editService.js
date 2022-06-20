import * as authService from './authServices.js' 
const editUrl = 'http://localhost:3030/data/pets/'



export const edit = (id, petData) => {
    return fetch(`${editUrl}${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': authService.getToken()
        },
        body: JSON.stringify(petData)
    })
    .then(res => res.json())
}