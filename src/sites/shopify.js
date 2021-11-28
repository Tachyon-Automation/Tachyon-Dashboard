import React, { Component } from 'react';

import { connect } from 'react-redux'

class Shopify extends Component {

    async componentDidMount() {
        this.updateHooks()
    }

    updateHooks = async () => {
        let inputs = document.getElementsByClassName("webhook");
        let userData = this.props.userData
        // console.log("webhook", userData.webhooks)
        for (let input of inputs) {
            // console.log(input.id)
            for (let key of Object.keys(userData.webhooks)) {
                if (key === input.id) {
                    input.value = userData.webhooks[key]
                }
            }
        }
    }

    submitHooks = async () => {
        this.props.dispatch({ type: 'START_LOADING' })
        // this.props.state.loaded = true
        let inputs = document.getElementsByClassName("webhook");
        let hooks = []
        // eslint-disable-next-line
        for (let input of inputs) {
            // eslint-disable-next-line
            if (input.value.trim().length !== 0 && !(input.value.match(/discord.com\/api\/webhooks\/([^\/]+)\/([^\/]+)/))) {
                alert(`Webhook "${input.placeholder}" is not a valid webhook`)
                return
            }
            // console.log(input.id + ":", input.value)
            hooks.push({
                name: input.id,
                url: input.value
            })
        }
        if (hooks.length === 0)
            return
        let response = await fetch('/storehooks', {
            method: "POST",
            body: JSON.stringify({
                access_token: this.props.userData.access_token,
                webhooks: hooks
            }),
            headers: {
                "content-type": "application/json"
            }
        })
        if (response.status !== 200) {
            alert("Something went wrong, please contact devs")
            return;
        }
        let body = await response.json();
        this.props.dispatch({ type: 'UPDATE_WEBHOOKS', payload: body })
        this.props.dispatch({ type: 'STOP_LOADING' })
        this.updateHooks()
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
                        <input class="webhook" type="text" id="UNDEFEATED" name="shopify" placeholder="Undefeated" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Kith</label>
                    <form>
                        <input class="webhook" type="text" id="KITH" name="shopify" placeholder="Kith" autoComplete="off"></input>
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
                        <input class="webhook" type="text" id="SHOEPALACE" name="shopify" placeholder="Shoepalace" autoComplete="off"></input>
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

function mapStateToProps(state) {
    return {
        loaded: state.loaded,
        userData: state.userData
    }
}

export default connect(mapStateToProps)(Shopify);
