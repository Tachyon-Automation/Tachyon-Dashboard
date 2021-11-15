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
               <input class="shopify" type="text" id="FOOTLOCKERUS" name="shopify" placeholder="Footlocker US" autocomplete="off"></input>
           </form>
           <label class="hook-label" for="shopify" >Champs Sports</label>
            <form>
               <input class="shopify" type="text" id="CHAMPSSPORTS" name="shopify" placeholder="Champs Sports" autocomplete="off"></input>
           </form>
           <label class="hook-label" for="shopify" >Footaction</label>
            <form>
               <input class="shopify" type="text" id="FOOTACTION" name="shopify" placeholder="Footaction" autocomplete="off"></input>
           </form>
           <label class="hook-label" for="shopify" >Eastbay</label>
            <form>
               <input class="shopify" type="text" id="EASTBAY" name="shopify" placeholder="Eastbay" autocomplete="off"></input>
           </form>
           <label class="hook-label" for="shopify" >Kids Footlocker</label>
            <form>
               <input class="shopify" type="text" id="KIDSFOOTLOCKER" name="shopify" placeholder="Kids Footlocker" autocomplete="off"></input>
           </form>
           <label class="hook-label" for="shopify" >Lady Footlocker</label>
            <form>
               <input class="shopify" type="text" id="LADYFOOTLOCKER" name="shopify" placeholder="Lady Footlocker" autocomplete="off"></input>
           </form>
           <label class="hook-label" for="shopify" >Footlocker EU</label>
            <form>
               <input class="shopify" type="text" id="FOOTLOCKEREU" name="shopify" placeholder="Footlocker EU" autocomplete="off"></input>
           </form>
           <button class="save-button "type="button" >Save Changes</button>
           </div>
        </div>
    );
}
}

export default About;