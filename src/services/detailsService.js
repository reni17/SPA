const detailsUrl = 'http://localhost:3030/data/pets/'

export const details = (id) => {
    return fetch(`${detailsUrl}${id}`)
    .then(res => res.json())
}