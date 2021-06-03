import React, {Component} from 'react';

class About extends Component{

    render()
    {
        return (
            <div>
                <div class="grid-container">
                <h2 class="hook-container">Adidas Webhooks</h2>
                <label class="hook-label" for="webhook" >Yeezysupply</label>
                <form>
                   <input class="shopify" type="text" id="YEEZYSUPPLY" name="shopify" placeholder="Yeezysupply" autocomplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >Adiadas US</label>
                <form>
                   <input class="shopify" type="text" id="ADIDASUS" name="shopify" placeholder="Adiadas US" autocomplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >Adiadas CA</label>
                <form>
                   <input class="shopify" type="text" id="ADIDASCA" name="shopify" placeholder="Adiadas CA" autocomplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >Adiadas UK</label>
                <form>
                   <input class="shopify" type="text" id="ADIDASUK" name="shopify" placeholder="Adiadas UK" autocomplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >Adiadas EU</label>
                <form>
                   <input class="shopify" type="text" id="ADIDASEU" name="shopify" placeholder="Adiadas EU" autocomplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >Confirmed App</label>
                <form>
                   <input class="shopify" type="text" id="CONFIRMEDAPP" name="shopify" placeholder="Confirmed App" autocomplete="off"></input>
               </form>
               <button class="save-button "type="button" >Save Changes</button>
               </div>
            </div>
        );
    }
}
export default About;