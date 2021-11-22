import React, {Component} from 'react';

class About extends Component{

    render()
    {
        return (
            <div>
            <div class="grid-container">
            <h2 class="hook-container">Footsites Webhooks</h2>
            <label class="hook-label" for="webhook" >Footlocker US</label>
            <form>
               <input class="webhook" type="text" id="FOOTLOCKERUS" name="shopify" placeholder="Footlocker US" autoComplete="off"></input>
           </form>
           <label class="hook-label" for="shopify" >Champs Sports</label>
            <form>
               <input class="webhook" type="text" id="CHAMPSSPORTS" name="shopify" placeholder="Champs Sports" autoComplete="off"></input>
           </form>
           <label class="hook-label" for="shopify" >Footaction</label>
            <form>
               <input class="webhook" type="text" id="FOOTACTION" name="shopify" placeholder="Footaction" autoComplete="off"></input>
           </form>
           <label class="hook-label" for="shopify" >Eastbay</label>
            <form>
               <input class="webhook" type="text" id="EASTBAY" name="shopify" placeholder="Eastbay" autoComplete="off"></input>
           </form>
           <label class="hook-label" for="shopify" >Kids Footlocker</label>
            <form>
               <input class="webhook" type="text" id="KIDSFOOTLOCKER" name="shopify" placeholder="Kids Footlocker" autoComplete="off"></input>
           </form>
           <label class="hook-label" for="shopify" >Lady Footlocker</label>
            <form>
               <input class="webhook" type="text" id="LADYFOOTLOCKER" name="shopify" placeholder="Lady Footlocker" autoComplete="off"></input>
           </form>
           <label class="hook-label" for="shopify" >Footlocker EU</label>
            <form>
               <input class="webhook" type="text" id="FOOTLOCKEREU" name="shopify" placeholder="Footlocker EU" autoComplete="off"></input>
           </form>
           <button class="save-button "type="button" >Save Changes</button>
           </div>
        </div>
    );
}
}

export default About;