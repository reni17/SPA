const allPetsUrl = 'http://localhost:3030/data/pets?sortBy=_createdOn%20desc&distinct=name'


export const getAll = () => {
    return fetch(allPetsUrl)
    .then(res => res.json())
}