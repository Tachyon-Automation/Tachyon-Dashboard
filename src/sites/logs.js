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
                    <h2 class="hook-container">Bot Log Webhooks</h2>
                    <label class="hook-label" for="webhook" >ALL</label>
                    <form>
                        <input class="webhook" type="text" id="ALL" name="shopify" placeholder="ALL" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >ANB</label>
                    <form>
                        <input class="webhook" type="text" id="ANB" name="shopify" placeholder="ANB" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >BALKO</label>
                    <form>
                        <input class="webhook" type="text" id="BALKO" name="shopify" placeholder="BALKO" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >BURST</label>
                    <form>
                        <input class="webhook" type="text" id="BURST" name="shopify" placeholder="BURST" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >CYBER</label>
                    <form>
                        <input class="webhook" type="text" id="CYBER" name="shopify" placeholder="CYBER" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >DRAGON</label>
                    <form>
                        <input class="webhook" type="text" id="DRAGON" name="shopify" placeholder="DRAGON" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >EVE</label>
                    <form>
                        <input class="webhook" type="text" id="EVE" name="shopify" placeholder="EVE" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >ECB</label>
                    <form>
                        <input class="webhook" type="text" id="ECB" name="shopify" placeholder="ECB" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >GANESH</label>
                    <form>
                        <input class="webhook" type="text" id="GANESH" name="shopify" placeholder="GANESH" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >HAWK</label>
                    <form>
                        <input class="webhook" type="text" id="HAWK" name="shopify" placeholder="HAWK" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >HAYHA</label>
                    <form>
                        <input class="webhook" type="text" id="HAYHA" name="shopify" placeholder="HAYHA" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >KODAI</label>
                    <form>
                        <input class="webhook" type="text" id="KODAI" name="shopify" placeholder="KODAI" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >KYLIN</label>
                    <form>
                        <input class="webhook" type="text" id="KYLIN" name="shopify" placeholder="KYLIN" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >MEKAIO</label>
                    <form>
                        <input class="webhook" type="text" id="MEKAIO" name="shopify" placeholder="MEKAIO" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >MEKPREME</label>
                    <form>
                        <input class="webhook" type="text" id="MEKPREME" name="shopify" placeholder="MEKPREME" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >NSB</label>
                    <form>
                        <input class="webhook" type="text" id="NSB" name="shopify" placeholder="NSB" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >OMINUS</label>
                    <form>
                        <input class="webhook" type="text" id="OMINUS" name="shopify" placeholder="OMINUS" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >PD</label>
                    <form>
                        <input class="webhook" type="text" id="PD" name="shopify" placeholder="PD" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >PHANTOM</label>
                    <form>
                        <input class="webhook" type="text" id="PHANTOM" name="shopify" placeholder="PHANTOM" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >POLARIS</label>
                    <form>
                        <input class="webhook" type="text" id="POLARIS" name="shopify" placeholder="POLARIS" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >PRISM</label>
                    <form>
                        <input class="webhook" type="text" id="PRISM" name="shopify" placeholder="PRISM" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >REAIO</label>
                    <form>
                        <input class="webhook" type="text" id="REAIO" name="shopify" placeholder="REAIO" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >SOLE</label>
                    <form>
                        <input class="webhook" type="text" id="SOLE" name="shopify" placeholder="SOLE" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >SWIFTSOLE</label>
                    <form>
                        <input class="webhook" type="text" id="SWIFTSOLE" name="shopify" placeholder="SWIFTSOLE" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >TKS</label>
                    <form>
                        <input class="webhook" type="text" id="TKS" name="shopify" placeholder="TKS" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >TOHRU</label>
                    <form>
                        <input class="webhook" type="text" id="TOHRU" name="shopify" placeholder="TOHRU" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >TORPEDO</label>
                    <form>
                        <input class="webhook" type="text" id="TORPEDO" name="shopify" placeholder="TORPEDO" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >TSB</label>
                    <form>
                        <input class="webhook" type="text" id="TSB" name="shopify" placeholder="TSB" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >VELOX</label>
                    <form>
                        <input class="webhook" type="text" id="VELOX" name="shopify" placeholder="VELOX" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >WRATH</label>
                    <form>
                        <input class="webhook" type="text" id="WRATH" name="shopify" placeholder="WRATH" autoComplete="off"></input>
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