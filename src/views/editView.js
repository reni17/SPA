import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import { details } from '../service/detailsService.js'
import {petIsNotValid} from '../utils/validator.js'
import * as editService from '../service/editService.js'

const editTemplate = (pet, submitHandler) => html`
 <section id="editPage">
            <form @submit = ${submitHandler} class="editForm">
                <img src=${pet.image}>
                <div>
                    <h2>Edit PetPal</h2>
                    <div class="name">
                        <label for="name">Name:</label>
                        <input name="name" id="name" type="text" value=${pet.name}>
                    </div>
                    <div class="breed">
                        <label for="breed">Breed:</label>
                        <input name="breed" id="breed" type="text" value=${pet.breed}>
                    </div>
                    <div class="Age">
                        <label for="age">Age:</label>
                        <input name="age" id="age" type="text" value=${pet.age}>
                    </div>
                    <div class="weight">
                        <label for="weight">Weight:</label>
                        <input name="weight" id="weight" type="text" value=${pet.weight}>
                    </div>
                    <div class="image">
                        <label for="image">Image:</label>
                        <input name="image" id="image" type="text" value=${pet.image}>
                    </div>
                    <button class="btn" type="submit">Edit Pet</button>
                </div>
            </form>
        </section>
`

export const editView = (ctx) => {
    const submitHandler = (e) => {
        e.preventDefault();
    
        let petData = Object.fromEntries(new FormData(e.currentTarget));
    
        if (petIsNotValid(petData)) {
          alert('All fields are required!');
          return;
        }
    
        
          editService.edit(ctx.params.petId, petData)
          .then(() => {
            ctx.page.redirect(`/pets/${ctx.params.petId}`);
          })
          .catch(error => {
            alert(error);
          });
      };
  
      details(ctx.params.petId).then(pet =>{ctx.render(editTemplate(pet, submitHandler))
      })
}