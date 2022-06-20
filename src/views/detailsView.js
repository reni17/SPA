import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import { details } from '../service/detailsService.js';



const detailsTemplate = (pet, user, donateHandler) => html`
<section id="detailsPage">
            <div class="details">
                <div class="animalPic">
                    <img src=${pet.image}>
                </div>
                <div>
                    <div class="animalInfo">
                        <h1>Name:${pet.name}</h1>
                        <h3>Breed: ${pet.breed}</h3>
                        <h4>Age:${pet.age}</h4>
                        <h4>Weight:${pet.weight}</h4>
                        <h4 class="donation">Donation: 0$</h4>
                    </div>
                 
                    ${ user._id && user._id == pet._ownerId ? html` <div class="actionBtn">
                       
                        <a href="/pets/${pet._id}/edit" class="edit">Edit</a>
                        <a href="/pets/${pet._id}/delete" class="remove">Delete</a>
                    </div>`:
                    nothing
                    }
                    ${user._id && user._id !== pet._ownerId ? html`<div class="actionBtn">
                        <a @click = ${donateHandler} href="/donate" class="donate">Donate</a>
                    </div>
                      
                     ` : nothing}
                    
                       
                </div>
            </div>
        </section>
`


export const detailsView = (ctx) => {
    const donateHandler = (e) => {
    e.preventDefault()
    let donateH4 = document.querySelector('.donation')
   donateH4.innerHTML = `Donation: 100$`
   e.currentTarget.style.display = 'none'

}
    console.log(ctx.user);
    details(ctx.params.petId).then(pet =>ctx.render(detailsTemplate(pet, ctx.user, donateHandler)))
}