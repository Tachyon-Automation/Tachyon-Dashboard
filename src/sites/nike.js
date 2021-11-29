import React, { Component } from 'react';

import { connect } from 'react-redux'


class About extends Component {

    webhooks = {
        "SNKRSAU": "SNKRS AU",
        "SNKRSBE": "SNKRS BE",
        "SNKRSCA": "SNKRS CA",
        "SNKRSCL": "SNKRS CL",
        "SNKRSCN": "SNKRS CN",
        "SNKRSDE": "SNKRS DE",
        "SNKRSES": "SNKRS ES",
        "SNKRSFR": "SNKRS FR",
        "SNKRSGB": "SNKRS GB",
        "SNKRSID": "SNKRS ID",
        "SNKRSIE": "SNKRS IE",
        "SNKRSIN": "SNKRS IN",
        "SNKRSIT": "SNKRS IT",
        "SNKRSJP": "SNKRS JP",
        "SNKRSMX": "SNKRS MX",
        "SNKRSMY": "SNKRS MY",
        "SNKRSNL": "SNKRS NL",
        "SNKRSNZ": "SNKRS NZ",
        "SNKRSPH": "SNKRS PH",
        "SNKRSPL": "SNKRS PL",
        "SNKRSRU": "SNKRS RU",
        "SNKRSSG": "SNKRS SG",
        "SNKRSTH": "SNKRS TH",
        "SNKRSUS": "SNKRS US"
    }

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
                    <h2 class="hook-container">Nike Webhooks</h2>
                    {Object.keys(this.webhooks).map((item, index) => (
                        <form>
                            <label class="hook-label" >{this.webhooks[item]}</label><br />
                            <input class="webhook" type="text" id={item} name="shopify" placeholder={this.webhooks[item]} autoComplete="off"></input>
                        </form>
                    ))}
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