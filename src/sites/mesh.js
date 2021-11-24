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
                    <h2 class="hook-container">Mesh Webhooks</h2>
                    <label class="hook-label" for="webhook" >Footpatrol GB</label>
                    <form>
                        <input class="webhook" type="text" id="FOOTPATROLGB" name="shopify" placeholder="Footpatrol GB" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Size UK</label>
                    <form>
                        <input class="webhook" type="text" id="shopifyfiltered2" name="shopify" placeholder="Size UK" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Size DK</label>
                    <form>
                        <input class="webhook" type="text" id="shopifyfilteredeu" name="shopify" placeholder="Size DK" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Size DE</label>
                    <form>
                        <input class="webhook" type="text" id="shopifyvariants" name="shopify" placeholder="Size DE" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Size ES</label>
                    <form>
                        <input class="webhook" type="text" id="dsm" name="shopify" placeholder="Size ES" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Size FR</label>
                    <form>
                        <input class="webhook" type="text" id="undefeated" name="shopify" placeholder="Size FR" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Size IE</label>
                    <form>
                        <input class="webhook" type="text" id="kith" name="shopify" placeholder="Size IE" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Size IT</label>
                    <form>
                        <input class="webhook" type="text" id="kitheu" name="shopify" placeholder="Size IT" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Size NL</label>
                    <form>
                        <input class="webhook" type="text" id="palace" name="shopify" placeholder="Size NL" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >Size SE</label>
                    <form>
                        <input class="webhook" type="text" id="funko" name="shopify" placeholder="Size SE" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >JD Sports UK</label>
                    <form>
                        <input class="webhook" type="text" id="shopifyskateshops" name="shopify" placeholder="JD Sports UK" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >JD Sports DK</label>
                    <form>
                        <input class="webhook" type="text" id="shopifypassword" name="shopify" placeholder="JD Sports DK" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >JD Sports DE</label>
                    <form>
                        <input class="webhook" type="text" id="cpfm" name="shopify" placeholder="JD Sports DEt" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >JD Sports ES</label>
                    <form>
                        <input class="webhook" type="text" id="dtlr" name="shopify" placeholder="JD Sports ES" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >JD Sports FR</label>
                    <form>
                        <input class="webhook" type="text" id="kaws" name="shopify" placeholder="JD Sports FR" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >JD Sports IE</label>
                    <form>
                        <input class="webhook" type="text" id="shopifyantibot" name="shopify" placeholder="JD Sports IE" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >JD Sports IT</label>
                    <form>
                        <input class="webhook" type="text" id="shoepalace" name="shopify" placeholder="JD Sports IT" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >JD Sports NL</label>
                    <form>
                        <input class="webhook" type="text" id="zadehkicks" name="shopify" placeholder="JD Sports NL" autoComplete="off"></input>
                    </form>
                    <label class="hook-label" for="shopify" >JD Sports SE</label>
                    <form>
                        <input class="webhook" type="text" id="shopifyquestions" name="shopify" placeholder="JD Sports SE" autoComplete="off"></input>
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