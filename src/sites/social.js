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
                    <h2 class="hook-container">Social Webhooks</h2>
                    <label class="hook-label" for="webhook" >Twitter</label>
                    <form>
                        <input class="webhook" type="text" id="TWITTER" name="shopify" placeholder="Twitter" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Instagram</label>
                    <form>
                        <input class="webhook" type="text" id="INSTAGRAM" name="shopify" placeholder="Instagram" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Youtube</label>
                    <form>
                        <input class="webhook" type="text" id="Youtube" name="shopify" placeholder="Youtube" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Twitch</label>
                    <form>
                        <input class="webhook" type="text" id="Twitch" name="shopify" placeholder="Twitch" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Buildapcsales</label>
                    <form>
                        <input class="webhook" type="text" id="BUILDAPCSALES" name="shopify" placeholder="Reddit Buildapcsales" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Deals</label>
                    <form>
                        <input class="webhook" type="text" id="DEALS" name="shopify" placeholder="Reddit Deals" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Freebies</label>
                    <form>
                        <input class="webhook" type="text" id="FREEBIES" name="shopify" placeholder="Reddit Freebies" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Gamedealas</label>
                    <form>
                        <input class="webhook" type="text" id="kitheu" name="shopify" placeholder="Reddit Gamedealas" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Sneaker Deals</label>
                    <form>
                        <input class="webhook" type="text" id="SNEAKERDEALS" name="shopify" placeholder="Reddit Sneaker Deals" autoComplete="off"></input>
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