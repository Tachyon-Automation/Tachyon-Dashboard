import React, { Component } from 'react';

class About extends Component {

    submitHooks = () => {
        let inputs = document.getElementsByClassName("webhook");
        let hooks = []
        // eslint-disable-next-line
        for (let input of inputs) {
            console.log(input.id + ":", input.value)
            hooks.push({
                name: input.id,
                webhook: input.value
            })
        }
        fetch('/storehooks', {
            method: "POST",
            body: JSON.stringify({
                webhooks: hooks
            })
        })
    }

    render() {
        return (
            <div>
                <div class="grid-container">
                    <h2 class="hook-container">Nike Webhooks</h2>
                    <label class="hook-label" for="webhook" >SNKRS US</label>
                    <form>
                        <input class="webhook" type="text" id="SNKRSUS" name="shopify" placeholder="SNKRS US" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Nike CN</label>
                    <form>
                        <input class="webhook" type="text" id="NIKECN" name="shopify" placeholder="Nike CN" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Nike FR</label>
                    <form>
                        <input class="webhook" type="text" id="NIKEFR" name="shopify" placeholder="Nike FR" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Nike JP</label>
                    <form>
                        <input class="webhook" type="text" id="NIKEJP" name="shopify" placeholder="Nike JP" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Nike GB</label>
                    <form>
                        <input class="webhook" type="text" id="NIKEGB" name="shopify" placeholder="Nike GB" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Nike CA</label>
                    <form>
                        <input class="webhook" type="text" id="NIKECA" name="shopify" placeholder="Nike CA" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Nike AU</label>
                    <form>
                        <input class="webhook" type="text" id="NIKEAU" name="shopify" placeholder="Nike AU" autoComplete="off"></input>
                    </form>
                    <button class="save-button" id="save" type="button" onClick={this.submitHooks}>Save Changes</button>
                </div>
            </div>
        );
    }
}
export default About;