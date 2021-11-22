import React, {Component} from 'react';

class About extends Component{

    render()
    {
        return (
            <div>
                <div class="grid-container">
                <h2 class="hook-container">Mesh Webhooks</h2>
                <label class="hook-label" for="webhook" >Footpatrol GB</label>
                <form>
                   <input class="webhook" type="text" id="FOOTPATROLGB" name="shopify" placeholder="Footpatrol GB" autoComplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >Size UK</label>
                <form>
                   <input class="webhook" type="text" id="shopifyfiltered2" name="shopify" placeholder="Size UK" autoComplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >Size DK</label>
                <form>
                   <input class="webhook" type="text" id="shopifyfilteredeu" name="shopify" placeholder="Size DK" autoComplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >Size DE</label>
                <form>
                   <input class="webhook" type="text" id="shopifyvariants" name="shopify" placeholder="Size DE" autoComplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >Size ES</label>
                <form>
                   <input class="webhook" type="text" id="dsm" name="shopify" placeholder="Size ES" autoComplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >Size FR</label>
                <form>
                   <input class="webhook" type="text" id="undefeated" name="shopify" placeholder="Size FR" autoComplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >Size IE</label>
                <form>
                   <input class="webhook" type="text" id="kith" name="shopify" placeholder="Size IE" autoComplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >Size IT</label>
                <form>
                   <input class="webhook" type="text" id="kitheu" name="shopify" placeholder="Size IT" autoComplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >Size NL</label>
                <form>
                   <input class="webhook" type="text" id="palace" name="shopify" placeholder="Size NL" autoComplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >Size SE</label>
                <form>
                   <input class="webhook" type="text" id="funko" name="shopify" placeholder="Size SE" autoComplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >JD Sports UK</label>
                <form>
                   <input class="webhook" type="text" id="shopifyskateshops" name="shopify" placeholder="JD Sports UK" autoComplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >JD Sports DK</label>
                <form>
                   <input class="webhook" type="text" id="shopifypassword" name="shopify" placeholder="JD Sports DK" autoComplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >JD Sports DE</label>
                <form>
                   <input class="webhook" type="text" id="cpfm" name="shopify" placeholder="JD Sports DEt" autoComplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >JD Sports ES</label>
                <form>
                   <input class="webhook" type="text" id="dtlr" name="shopify" placeholder="JD Sports ES" autoComplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >JD Sports FR</label>
                <form>
                   <input class="webhook" type="text" id="kaws" name="shopify" placeholder="JD Sports FR" autoComplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >JD Sports IE</label>
                <form>
                   <input class="webhook" type="text" id="shopifyantibot" name="shopify" placeholder="JD Sports IE" autoComplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >JD Sports IT</label>
                <form>
                   <input class="webhook" type="text" id="shoepalace" name="shopify" placeholder="JD Sports IT" autoComplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >JD Sports NL</label>
                <form>
                   <input class="webhook" type="text" id="zadehkicks" name="shopify" placeholder="JD Sports NL" autoComplete="off"></input>
               </form>
               <label class="hook-label" for="shopify" >JD Sports SE</label>
                <form>
                   <input class="webhook" type="text" id="shopifyquestions" name="shopify" placeholder="JD Sports SE" autoComplete="off"></input>
               </form>
               <button class="save-button "type="button" >Save Changes</button>
               </div>
            </div>
        );
    }
}

export default About;