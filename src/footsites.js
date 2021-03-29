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
                   <input type="text" id="shopify" name="shopify" placeholder="Footlocker US" autocomplete="off"></input>
               </form>
               <button class="save-button "type="button" >Save Changes</button>
               </div>
            </div>
        );
    }
}

export default About;