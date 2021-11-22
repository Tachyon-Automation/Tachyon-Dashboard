import React, {Component} from 'react';

class About extends Component{

    render()
    {
        return (
            <div>
                <div class="grid-container">
                <h2 class="hook-container">Releaseinfo Webhooks</h2>
                <label class="hook-label" for="webhook" >Supreme</label>
                <form>
                   <input class="webhook" type="text" id="SUPRME" name="shopify" placeholder="Supreme" autoComplete="off"></input>
               </form>
               <label class="hook-label" for="webhook" >Kith</label>
                <form>
                   <input class="webhook" type="text" id="KITH" name="shopify" placeholder="Kith" autoComplete="off"></input>
               </form>
               <label class="hook-label" for="webhook" >Palace</label>
                <form>
                   <input class="webhook" type="text" id="Palace" name="shopify" placeholder="Palace" autoComplete="off"></input>
               </form>
\
               <button class="save-button "type="button" >Save Changes</button>
               </div>
            </div>
        );
    }
}
export default About;