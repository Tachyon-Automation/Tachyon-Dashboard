import React, {Component} from 'react';

class About extends Component{

    render()
    {
        return (
            <div>
                <div class="grid-container">
                <h2 class="hook-container">Supreme Webhooks</h2>
                <label class="hook-label" for="webhook" >Supreme US</label>
                <form>
                   <input class="shopify" type="text" id="SUPREMEUS" name="shopify" placeholder="Supreme US" autocomplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >Supreme UK</label>
                <form>
                   <input class="shopify" type="text" id="SUPREMEUK" name="shopify" placeholder="Supreme UK" autocomplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >Supreme EU</label>
                <form>
                   <input class="shopify" type="text" id="SUPREMEEU" name="shopify" placeholder="Supreme EU" autocomplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >Supreme GB</label>
                <form>
                   <input class="shopify" type="text" id="SUPREMEGB" name="shopify" placeholder="Supreme GB" autocomplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >Supreme JP</label>
                <form>
                   <input class="shopify" type="text" id="SUPREMEJP" name="shopify" placeholder="Supreme JP" autocomplete="off"></input>
               </form>
               <button class="save-button "type="button" >Save Changes</button>
               </div>
            </div>
        );
    }
}
export default About;