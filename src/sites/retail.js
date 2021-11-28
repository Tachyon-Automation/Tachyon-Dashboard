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
                    <h2 class="hook-container">Retail Webhooks</h2>
                    <label class="hook-label" for="webhook" >Walmart US</label>
                    <form>
                        <input class="webhook" type="text" id="WALMARTUS" name="shopify" placeholder="Walmart US" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Walmart CA</label>
                    <form>
                        <input class="webhook" type="text" id="WALMARTCA" name="shopify" placeholder="Walmart CA" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >US Mint</label>
                    <form>
                        <input class="webhook" type="text" id="USMINT" name="shopify" placeholder="US Mint" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Newegg US</label>
                    <form>
                        <input class="webhook" type="text" id="NEWEGGUS" name="shopify" placeholder="Newegg US" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Newegg CA</label>
                    <form>
                        <input class="webhook" type="text" id="NEWEGGCA" name="shopify" placeholder="Newegg CA" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Bestbuy US</label>
                    <form>
                        <input class="webhook" type="text" id="BESTBUYUS" name="shopify" placeholder="Bestbuy US" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Bestbuy CA</label>
                    <form>
                        <input class="webhook" type="text" id="BESTBUYCA" name="shopify" placeholder="Bestbuy CA" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Bestbuy MX</label>
                    <form>
                        <input class="webhook" type="text" id="BESTBUYMX" name="shopify" placeholder="Bestbuy MX" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >CA Computers</label>
                    <form>
                        <input class="webhook" type="text" id="CACOMPUTERS" name="shopify" placeholder="CA Computers" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Curry UK</label>
                    <form>
                        <input class="webhook" type="text" id="CURRYUK" name="shopify" placeholder="Curry UK" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Home Depot</label>
                    <form>
                        <input class="webhook" type="text" id="HOMEDEPOT" name="shopify" placeholder="Home Depot" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Target</label>
                    <form>
                        <input class="webhook" type="text" id="TARGET" name="shopify" placeholder="Target" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Disney</label>
                    <form>
                        <input class="webhook" type="text" id="DISNEY" name="shopify" placeholder="Disney" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Microcenter</label>
                    <form>
                        <input class="webhook" type="text" id="MICROCENTER" name="shopify" placeholder="Microcenter" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Game Nerdz</label>
                    <form>
                        <input class="webhook" type="text" id="GAMENERDZ" name="shopify" placeholder="Game Nerdz" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Sams Club</label>
                    <form>
                        <input class="webhook" type="text" id="SAMSCLUB" name="shopify" placeholder="Sams Club" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Pokemoncenter</label>
                    <form>
                        <input class="webhook" type="text" id="POKEMONCENTER" name="shopify" placeholder="Pokemoncenter" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Topps</label>
                    <form>
                        <input class="webhook" type="text" id="TOPPS" name="shopify" placeholder="Topps" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Gamestop</label>
                    <form>
                        <input class="webhook" type="text" id="GAMESTOP" name="shopify" placeholder="Gamestop" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Argos UK</label>
                    <form>
                        <input class="webhook" type="text" id="ARGOSUK" name="shopify" placeholder="Argos UK" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Amazon US</label>
                    <form>
                        <input class="webhook" type="text" id="AMAZONUS" name="shopify" placeholder="Amazon US" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Amazon CA</label>
                    <form>
                        <input class="webhook" type="text" id="AMAZONCA" name="shopify" placeholder="Amazon CA" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Amazon UK</label>
                    <form>
                        <input class="webhook" type="text" id="AMAZONUK" name="shopify" placeholder="Amazon UK" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >AMD</label>
                    <form>
                        <input class="webhook" type="text" id="AMD" name="shopify" placeholder="AMD" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Scottycameron</label>
                    <form>
                        <input class="webhook" type="text" id="SCOTYYCAMERON" name="shopify" placeholder="Scottycameron" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Adorama</label>
                    <form>
                        <input class="webhook" type="text" id="ADORAMA" name="shopify" placeholder="Adorama" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >BNH</label>
                    <form>
                        <input class="webhook" type="text" id="BNH" name="shopify" placeholder="BNH" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Soul MX</label>
                    <form>
                        <input class="webhook" type="text" id="SOULMX" name="shopify" placeholder="Soul MX" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Officedepot</label>
                    <form>
                        <input class="webhook" type="text" id="OFFICEDEPOT" name="shopify" placeholder="Officedepot" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Taf MX</label>
                    <form>
                        <input class="webhook" type="text" id="TAFMX" name="shopify" placeholder="Taf MX" autoComplete="off"></input>
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