import React, { Component } from 'react';
class About extends Component {

    // componentDidMount() {        
    //     let inputs = document.getElementsByClassName("webhook");
    //     for (let input of inputs) {
    //         if (input.id === "undefeated")
    //             input.value = "aggie"
    //     }
    // }

    submitHooks = () => {
        let inputs = document.getElementsByClassName("webhook");
        let hooks = []
        // eslint-disable-next-line
        for (let input of inputs) {
            if (!(input.value.match(/discord.com\/api\/webhooks\/([^\/]+)\/([^\/]+)/)) && input.value.trim().length !== 0) {
                alert(`Webhook "${input.placeholder}" is not a valid webhook`)
                return
            }
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
                    <h2 class="hook-container">Shopify Webhooks</h2>
                    <label class="hook-label" for="webhook" >Shopify Filtered</label>
                    <form>
                        <input class="webhook" type="text" id="shopifyfiltered" name="shopify" placeholder="Shopify Filtered" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Shopify Filtered 2</label>
                    <form>
                        <input class="webhook" type="text" id="shopifyfiltered2" name="shopify" placeholder="Shopify Filtered 2" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Shopify Filtered EU</label>
                    <form>
                        <input class="webhook" type="text" id="shopifyfilteredeu" name="shopify" placeholder="Shopify Filtered EU" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Shopify Variants</label>
                    <form>
                        <input class="webhook" type="text" id="shopifyvariants" name="shopify" placeholder="Shopify Filtered Variants" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >DSM</label>
                    <form>
                        <input class="webhook" type="text" id="dsm" name="shopify" placeholder="DSM" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Undefeated</label>
                    <form>
                        <input class="webhook" type="text" id="undefeated" name="shopify" placeholder="Undefeated" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Kith</label>
                    <form>
                        <input class="webhook" type="text" id="kith" name="shopify" placeholder="Kith" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Kith EU</label>
                    <form>
                        <input class="webhook" type="text" id="kitheu" name="shopify" placeholder="Kith EU" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Palace</label>
                    <form>
                        <input class="webhook" type="text" id="palace" name="shopify" placeholder="Palace" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Funko</label>
                    <form>
                        <input class="webhook" type="text" id="funko" name="shopify" placeholder="Funko" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Skate Shops</label>
                    <form>
                        <input class="webhook" type="text" id="shopifyskateshops" name="shopify" placeholder="Skate Shops" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Password</label>
                    <form>
                        <input class="webhook" type="text" id="shopifypassword" name="shopify" placeholder="Password" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Cactus Plant</label>
                    <form>
                        <input class="webhook" type="text" id="cpfm" name="shopify" placeholder="Cactus Plant Flea Market" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >DTLR</label>
                    <form>
                        <input class="webhook" type="text" id="dtlr" name="shopify" placeholder="DTLR" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Kaws</label>
                    <form>
                        <input class="webhook" type="text" id="kaws" name="shopify" placeholder="Kaws" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Antibot</label>
                    <form>
                        <input class="webhook" type="text" id="shopifyantibot" name="shopify" placeholder="Antibot" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Shoepalace</label>
                    <form>
                        <input class="webhook" type="text" id="shoepalace" name="shopify" placeholder="Shoepalace" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Zadeh Kicks</label>
                    <form>
                        <input class="webhook" type="text" id="zadehkicks" name="shopify" placeholder="Zadeh Kicks" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Shopify Questions</label>
                    <form>
                        <input class="webhook" type="text" id="shopifyquestions" name="shopify" placeholder="Shopify Questions" autoComplete="off"></input>
                    </form>
                    <button class="save-button" id="save" type="button" onClick={this.submitHooks}>Save Changes</button>

                </div>
            </div>
        );

    }


}



export default About;
