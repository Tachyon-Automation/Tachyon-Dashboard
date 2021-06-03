import React, {Component} from 'react';

class About extends Component{

    render()
    {
        return (
            <div>
                <div class="grid-container">
                <h2 class="hook-container">Nike Webhooks</h2>
                <label class="hook-label" for="webhook" >Nike US</label>
                <form>
                   <input class="shopify" type="text" id="NIKEUS" name="shopify" placeholder="Nike US" autocomplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >Nike CN</label>
                <form>
                   <input class="shopify" type="text" id="NIKECN" name="shopify" placeholder="Nike CN" autocomplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >Nike FR</label>
                <form>
                   <input class="shopify" type="text" id="NIKEFR" name="shopify" placeholder="Nike FR" autocomplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >Nike JP</label>
                <form>
                   <input class="shopify" type="text" id="NIKEJP" name="shopify" placeholder="Nike JP" autocomplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >Nike GB</label>
                <form>
                   <input class="shopify" type="text" id="NIKEGB" name="shopify" placeholder="Nike GB" autocomplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >Nike CA</label>
                <form>
                   <input class="shopify" type="text" id="NIKECA" name="shopify" placeholder="Nike CA" autocomplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >Nike AU</label>
                <form>
                   <input class="shopify" type="text" id="NIKEAU" name="shopify" placeholder="Nike AU" autocomplete="off"></input>
               </form>
               <button class="save-button "type="button" >Save Changes</button>
               </div>
            </div>
        );
    }
}
export default About;