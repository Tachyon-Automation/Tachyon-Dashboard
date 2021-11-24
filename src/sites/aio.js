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
                    <h2 class="hook-container">AIO Webhooks</h2>
                    <label class="hook-label" for="webhook" >Finishline</label>
                    <form>
                        <input class="webhook" type="text" id="FINISHLINE" name="shopify" placeholder="Finishline" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Solebox</label>
                    <form>
                        <input class="webhook" type="text" id="SOLEBOX" name="shopify" placeholder="Solebox" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Offpring</label>
                    <form>
                        <input class="webhook" type="text" id="OFFSPRING" name="shopify" placeholder="Offpring" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Nordstrom</label>
                    <form>
                        <input class="webhook" type="text" id="NORDSTROM" name="shopify" placeholder="Nordstrom" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Hibbett</label>
                    <form>
                        <input class="webhook" type="text" id="HIBBETT" name="shopify" placeholder="Hibbett" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Ssense</label>
                    <form>
                        <input class="webhook" type="text" id="SSENSE" name="shopify" placeholder="Ssense" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Slam Jam</label>
                    <form>
                        <input class="webhook" type="text" id="SLAMJAM" name="shopify" placeholder="Slam Jam" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Snipes</label>
                    <form>
                        <input class="webhook" type="text" id="SNIPES" name="shopify" placeholder="Snipes" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Snipes US</label>
                    <form>
                        <input class="webhook" type="text" id="SNIPESUS" name="shopify" placeholder="Snipes US" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Box Lunch</label>
                    <form>
                        <input class="webhook" type="text" id="BOXLUNCH" name="shopify" placeholder="Box Lunch" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Hot Topic</label>
                    <form>
                        <input class="webhook" type="text" id="HOTTOPIC" name="shopify" placeholder="Hot Topic" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Shopwss</label>
                    <form>
                        <input class="webhook" type="text" id="SHOPWSS" name="shopify" placeholder="Shopwss" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Footshop</label>
                    <form>
                        <input class="webhook" type="text" id="FOOTSHOP" name="shopify" placeholder="Footshop" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >End</label>
                    <form>
                        <input class="webhook" type="text" id="END" name="shopify" placeholder="End" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Svd</label>
                    <form>
                        <input class="webhook" type="text" id="SVD" name="shopify" placeholder="Svd" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Asos</label>
                    <form>
                        <input class="webhook" type="text" id="ASOS" name="shopify" placeholder="Asos" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Courir</label>
                    <form>
                        <input class="webhook" type="text" id="COURIR" name="shopify" placeholder="Courir" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Lacoste</label>
                    <form>
                        <input class="webhook" type="text" id="LACOSTE" name="shopify" placeholder="Lacoste" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Mr Porter</label>
                    <form>
                        <input class="webhook" type="text" id="MRPORTER" name="shopify" placeholder="Mr Porter" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Net Porter</label>
                    <form>
                        <input class="webhook" type="text" id="NETPORTER" name="shopify" placeholder="Net Porter" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Crocs</label>
                    <form>
                        <input class="webhook" type="text" id="CROCS" name="shopify" placeholder="Crocs" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >New Balance</label>
                    <form>
                        <input class="webhook" type="text" id="NEWBALANCE" name="shopify" placeholder="New Balance" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >DSG</label>
                    <form>
                        <input class="webhook" type="text" id="DSG" name="shopify" placeholder="DSG" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Far Fetch</label>
                    <form>
                        <input class="webhook" type="text" id="FARFETCH" name="shopify" placeholder="Far Fetch" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Off White</label>
                    <form>
                        <input class="webhook" type="text" id="OFFWHITE" name="shopify" placeholder="Off White" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >SNS</label>
                    <form>
                        <input class="webhook" type="text" id="SNS" name="shopify" placeholder="SNS" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >louis Viaroma</label>
                    <form>
                        <input class="webhook" type="text" id="LOUISVIAROMA" name="shopify" placeholder="louis Viaroma" autoComplete="off"></input>
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