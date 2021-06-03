import React, {Component} from 'react';

class About extends Component{

    render()
    {
        return (
            <div>
                <div class="grid-container">
                <h2 class="hook-container">Economic Webhooks</h2>
                <label class="hook-label" for="webhook" >BNB</label>
                <form>
                   <input class="shopify" type="text" id="BNB" name="shopify" placeholder="BNB" autocomplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >BCH</label>
                <form>
                   <input class="shopify" type="text" id="BCH" name="shopify" placeholder="BCH" autocomplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >BTC</label>
                <form>
                   <input class="shopify" type="text" id="BTC" name="shopify" placeholder="BTC" autocomplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >DOGE</label>
                <form>
                   <input class="shopify" type="text" id="DOGE" name="shopify" placeholder="DOGE" autocomplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >DOT</label>
                <form>
                   <input class="shopify" type="text" id="DOT" name="shopify" placeholder="DOT" autocomplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >ETH</label>
                <form>
                   <input class="shopify" type="text" id="ETH" name="shopify" placeholder="ETH" autocomplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >LINK</label>
                <form>
                   <input class="shopify" type="text" id="LINK" name="shopify" placeholder="LINK" autocomplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >LTC</label>
                <form>
                   <input class="shopify" type="text" id="LTC" name="shopify" placeholder="LTC" autocomplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >Palace</label>
                <form>
                   <input class="shopify" type="text" id="palace" name="shopify" placeholder="Palace" autocomplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >XLM</label>
                <form>
                   <input class="shopify" type="text" id="XLM" name="XLM" placeholder="XLM" autocomplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >XMR</label>
                <form>
                   <input class="shopify" type="text" id="XMR" name="shopify" placeholder="XMR" autocomplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >XRP</label>
                <form>
                   <input class="shopify" type="text" id="XRP" name="shopify" placeholder="XRP" autocomplete="off"></input>
               </form>
               <button class="save-button "type="button" >Save Changes</button>
               </div>
            </div>
        );
    }
}
export default About;