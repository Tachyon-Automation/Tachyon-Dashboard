import React, { Component } from 'react';

import { connect } from 'react-redux'

class About extends Component {

    async componentDidMount() {
        this.updateHooks()
    }

    updateHooks = async () => {
        let inputs = document.getElementsByClassName("webhook");
        let userData = this.props.userData
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
                    <h2 class="hook-container">Adidas Webhooks</h2>
                    <label class="hook-label" for="webhook" >Yeezysupply</label>
                    <form>
                        <input class="webhook" type="text" id="YEEZYSUPPLY" name="shopify" placeholder="Yeezysupply" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Adiadas US</label>
                    <form>
                        <input class="webhook" type="text" id="ADIDASUS" name="shopify" placeholder="Adiadas US" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Adiadas CA</label>
                    <form>
                        <input class="webhook" type="text" id="ADIDASCA" name="shopify" placeholder="Adiadas CA" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Adiadas UK</label>
                    <form>
                        <input class="webhook" type="text" id="ADIDASUK" name="shopify" placeholder="Adiadas UK" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Adiadas EU</label>
                    <form>
                        <input class="webhook" type="text" id="ADIDASEU" name="shopify" placeholder="Adiadas EU" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Confirmed App</label>
                    <form>
                        <input class="webhook" type="text" id="CONFIRMEDAPP" name="shopify" placeholder="Confirmed App" autoComplete="off"></input>
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