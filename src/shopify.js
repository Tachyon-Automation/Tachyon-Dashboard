import React, {Component} from 'react';

class About extends Component{

    render()
    {
        return (
            <div>
                <div class="grid-container">
                <h2 class="hook-container">Shopify Webhooks</h2>
                <label class="hook-label" for="webhook" >Shopify Filtered</label>
                <form>
                   <input class="shopify" type="text" id="shopifyfiltered" name="shopify" placeholder="Shopify Filtered" autocomplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >Shopify Filtered 2</label>
                <form>
                   <input class="shopify" type="text" id="shopifyfiltered2" name="shopify" placeholder="Shopify Filtered 2" autocomplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >Shopify Filtered EU</label>
                <form>
                   <input class="shopify" type="text" id="shopifyfilteredeu" name="shopify" placeholder="Shopify Filtered EU" autocomplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >Shopify Variants</label>
                <form>
                   <input class="shopify" type="text" id="shopifyvariants" name="shopify" placeholder="Shopify Filtered Variants" autocomplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >DSM</label>
                <form>
                   <input class="shopify" type="text" id="dsm" name="shopify" placeholder="DSM" autocomplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >Undefeated</label>
                <form>
                   <input class="shopify" type="text" id="undefeated" name="shopify" placeholder="Undefeated" autocomplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >Kith</label>
                <form>
                   <input class="shopify" type="text" id="kith" name="shopify" placeholder="Kith" autocomplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >Kith EU</label>
                <form>
                   <input class="shopify" type="text" id="kitheu" name="shopify" placeholder="Kith EU" autocomplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >Palace</label>
                <form>
                   <input class="shopify" type="text" id="palace" name="shopify" placeholder="Palace" autocomplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >Funko</label>
                <form>
                   <input class="shopify" type="text" id="funko" name="shopify" placeholder="Funko" autocomplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >Skate Shops</label>
                <form>
                   <input class="shopify" type="text" id="shopifyskateshops" name="shopify" placeholder="Skate Shops" autocomplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >Password</label>
                <form>
                   <input class="shopify" type="text" id="shopifypassword" name="shopify" placeholder="Password" autocomplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >Cactus Plant</label>
                <form>
                   <input class="shopify" type="text" id="cpfm" name="shopify" placeholder="Cactus Plant Flea Market" autocomplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >DTLR</label>
                <form>
                   <input class="shopify" type="text" id="dtlr" name="shopify" placeholder="DTLR" autocomplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >Kaws</label>
                <form>
                   <input class="shopify" type="text" id="kaws" name="shopify" placeholder="Kaws" autocomplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >Antibot</label>
                <form>
                   <input class="shopify" type="text" id="shopifyantibot" name="shopify" placeholder="Antibot" autocomplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >Shoepalace</label>
                <form>
                   <input class="shopify" type="text" id="shoepalace" name="shopify" placeholder="Shoepalace" autocomplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >Zadeh Kicks</label>
                <form>
                   <input class="shopify" type="text" id="zadehkicks" name="shopify" placeholder="Zadeh Kicks" autocomplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >Shopify Questions</label>
                <form>
                   <input class="shopify" type="text" id="shopifyquestions" name="shopify" placeholder="Shopify Questions" autocomplete="off"></input>
               </form>
               <button class="save-button "type="button" >Save Changes</button>
               </div>
            </div>
        );
    }
}
export default About;