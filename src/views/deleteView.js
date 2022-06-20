import { deleteItem } from "../service/deleteService.js"

export const deleteView = (ctx) => {
    const confirmed = confirm('Are you sure you want to delete this pet?');

    if (confirmed) {
       deleteItem(ctx.params.petId).then(() =>ctx.page.redirect('/'))
    }
}