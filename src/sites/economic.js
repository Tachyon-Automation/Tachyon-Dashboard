import React, { Component } from 'react';

import { connect } from 'react-redux'

class About extends Component {

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
            if (input.value.trim().length === 0) {
                continue
            }
            // eslint-disable-next-line
            if (!(input.value.match(/discord.com\/api\/webhooks\/([^\/]+)\/([^\/]+)/))) {
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

export default connect(mapStateToProps)(About);