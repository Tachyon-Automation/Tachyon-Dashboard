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
                    <h2 class="hook-container">Footsites Webhooks</h2>
                    <label class="hook-label" for="webhook" >Footlocker US</label>
                    <form>
                        <input class="webhook" type="text" id="FOOTLOCKERUS" name="shopify" placeholder="Footlocker US" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Champs Sports</label>
                    <form>
                        <input class="webhook" type="text" id="CHAMPSSPORTS" name="shopify" placeholder="Champs Sports" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Footaction</label>
                    <form>
                        <input class="webhook" type="text" id="FOOTACTION" name="shopify" placeholder="Footaction" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Eastbay</label>
                    <form>
                        <input class="webhook" type="text" id="EASTBAY" name="shopify" placeholder="Eastbay" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Kids Footlocker</label>
                    <form>
                        <input class="webhook" type="text" id="KIDSFOOTLOCKER" name="shopify" placeholder="Kids Footlocker" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Lady Footlocker</label>
                    <form>
                        <input class="webhook" type="text" id="LADYFOOTLOCKER" name="shopify" placeholder="Lady Footlocker" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Footlocker EU</label>
                    <form>
                        <input class="webhook" type="text" id="FOOTLOCKEREU" name="shopify" placeholder="Footlocker EU" autoComplete="off"></input>
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