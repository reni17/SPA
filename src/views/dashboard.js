import {html, nothing} from '../../node_modules/lit-html/lit-html.js'
import  * as allPetsService from '../service/allPetsService.js' 
import * as authService from '../service/authServices.js'

const dashboardTemplate = (pets) => html`
<section id="dashboard">
            <h2 class="dashboard-title">Services for every animal</h2>
            <div class="animals-dashboard">
             
            ${pets.map(pet => petTemplate(pet))}
             ${pets.length == 0 ?
            html`<div>
                    <p class="no-pets">No pets in dashboard</p>
                </div>`:
            nothing}
                
            </div>
        </section>
`
const petTemplate = (pet) => html `
 <div class="animals-board">
<article class="service-img">
    <img class="animal-image-cover" src=${pet.image}>
</article>
<h2 class="name">${pet.name}</h2>
<h3 class="breed">${pet.breed}</h3>

${authService.getUser() ?
     html`<div class="action"> 
         <a class="btn" href="/pets/${pet._id}">Details</a>
         </div>` :
         nothing
}
</div> 
`

export const dashboardView = (ctx) => {
    allPetsService.getAll().then(pets => {
      ctx.render(dashboardTemplate(pets));
    });
  };
  