import React, {Component} from 'react';

class About extends Component{

    render()
    {
        return (
            <div>
                <div class="grid-container">
                <h2 class="hook-container">Social Webhooks</h2>
                <label class="hook-label" for="webhook" >Twitter</label>
                <form>
                   <input class="shopify" type="text" id="TWITTER" name="shopify" placeholder="Twitter" autocomplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >Instagram</label>
                <form>
                   <input class="shopify" type="text" id="INSTAGRAM" name="shopify" placeholder="Instagram" autocomplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >Youtube</label>
                <form>
                   <input class="shopify" type="text" id="Youtube" name="shopify" placeholder="Youtube" autocomplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >Twitch</label>
                <form>
                   <input class="shopify" type="text" id="Twitch" name="shopify" placeholder="Twitch" autocomplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >Buildapcsales</label>
                <form>
                   <input class="shopify" type="text" id="BUILDAPCSALES" name="shopify" placeholder="Reddit Buildapcsales" autocomplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >Deals</label>
                <form>
                   <input class="shopify" type="text" id="DEALS" name="shopify" placeholder="Reddit Deals" autocomplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >Freebies</label>
                <form>
                   <input class="shopify" type="text" id="FREEBIES" name="shopify" placeholder="Reddit Freebies" autocomplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >Gamedealas</label>
                <form>
                   <input class="shopify" type="text" id="kitheu" name="shopify" placeholder="Reddit Gamedealas" autocomplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >Sneaker Deals</label>
                <form>
                   <input class="shopify" type="text" id="SNEAKERDEALS" name="shopify" placeholder="Reddit Sneaker Deals" autocomplete="off"></input>
               </form>
               <button class="save-button "type="button" >Save Changes</button>
               </div>
            </div>
        );
    }
}
export default About;