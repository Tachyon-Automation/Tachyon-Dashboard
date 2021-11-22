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
                   <input class="webhook" type="text" id="BNB" name="shopify" placeholder="BNB" autoComplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >BCH</label>
                <form>
                   <input class="webhook" type="text" id="BCH" name="shopify" placeholder="BCH" autoComplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >BTC</label>
                <form>
                   <input class="webhook" type="text" id="BTC" name="shopify" placeholder="BTC" autoComplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >DOGE</label>
                <form>
                   <input class="webhook" type="text" id="DOGE" name="shopify" placeholder="DOGE" autoComplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >DOT</label>
                <form>
                   <input class="webhook" type="text" id="DOT" name="shopify" placeholder="DOT" autoComplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >ETH</label>
                <form>
                   <input class="webhook" type="text" id="ETH" name="shopify" placeholder="ETH" autoComplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >LINK</label>
                <form>
                   <input class="webhook" type="text" id="LINK" name="shopify" placeholder="LINK" autoComplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >LTC</label>
                <form>
                   <input class="webhook" type="text" id="LTC" name="shopify" placeholder="LTC" autoComplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >Palace</label>
                <form>
                   <input class="webhook" type="text" id="palace" name="shopify" placeholder="Palace" autoComplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >XLM</label>
                <form>
                   <input class="webhook" type="text" id="XLM" name="XLM" placeholder="XLM" autoComplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >XMR</label>
                <form>
                   <input class="webhook" type="text" id="XMR" name="shopify" placeholder="XMR" autoComplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >XRP</label>
                <form>
                   <input class="webhook" type="text" id="XRP" name="shopify" placeholder="XRP" autoComplete="off"></input>
               </form>
               <button class="save-button "type="button" >Save Changes</button>
               </div>
            </div>
        );
    }
}
export default About;