import React, { Component } from 'react';
import './App.css';
import 'primereact/resources/themes/rhea/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { connect } from 'react-redux'

import Shopify from './sites/shopify';
import settings from './sites/settings';
import supreme from './sites/supreme';
import adidas from './sites/adidas';
import nike from './sites/nike';
import footsites from './sites/footsites';
import mesh from './sites/mesh';
import aio from './sites/aio';
import retail from './sites/retail';
import economic from './sites/economic';
import social from './sites/social';
import releaseinfo from './sites/releaseinfo';
import logs from './sites/logs';

import DropdownSites from './dropdown'


import LoadingOverlay from "react-loading-overlay";
//import BounceLoader from "react-spinners/BounceLoader";

import styled, { css } from "styled-components";

const DarkBackground = styled.div`
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 999; /* Sit on top */
  left: 0;
  top: 0;
  padding-top: 200px;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */

  ${props =>
        props.disappear &&
        css`
      display: block; /* show */
    `}
`;

let redirect_uri
if(process.env.localhost) {
    redirect_uri = 'http://localhost:3000'
} else {
    redirect_uri = 'https://dash.tachyonrobotics.com'
}
const HREF_URI = `https://discord.com/api/oauth2/authorize?client_id=813827235630284870&redirect_uri=${redirect_uri}/&response_type=code&scope=identify guilds email`

class App extends Component {

    constructor() {
        super();
        this.state = {
            loaded: true
        };
    }

    componentDidMount() {
        const url = new URL(window.location.href);
        const code = url.searchParams.get('code')
        if (!code) {
            // alert(window.location.href)
            window.location.href = HREF_URI
            return;
        }
        this.props.dispatch({ type: 'START_LOADING' })
        console.log(code)
        fetch('/getaccess', {
            method: "POST",
            body: JSON.stringify({
                code: code
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(async response => {
            if (response.status !== 200) {
                if (response.status === 401) {
                    alert("ERROR: Unknown user, have you purchased a package yet?")
                    window.location.href = 'https://tachyonrobotics.com'
                    return;
                }
                alert(response.status)
                window.location.href = HREF_URI
                return;
            }
            let body = await response.json()
            // console.log(body)
            this.props.dispatch({ type: 'LOAD_USER', payload: body })
            this.props.dispatch({ type: 'STOP_LOADING' })
            // console.log("userData", this.props.userData)
        })
    }

    changeSite = (e) => {
        this.props.history.push(`/${e.target.value}`);
    }

    test = () => {
        console.log(window.location.href)
        console.log(this.props.userData)
    }

    render() {
        return (
            <div>
                <DarkBackground disappear={!this.props.loaded}>
                    <LoadingOverlay
                        active={true}
                        // spinner={<BounceLoader />}
                        spinner={true}
                        text="Loading..."
                    >
                    </LoadingOverlay>
                </DarkBackground>
                <div class="App" >
                    {/* <button onClick={this.test} /> */}
                    <div class="header">
                        <h1 class="brand">Tachyon Monitors</h1>
                        <a class="header-right" href="https://www.tachyonrobotics.com/">
                            <button class="logOut" type="button">Log out</button>
                        </a>
                    </div>
                    <div>
                        <h1 class="title">Client Dashboard </h1>
                        <p class="subtitle">Configure your webhooks</p>
                        <div class="header">
                        </div>
                    </div>
                    <DropdownSites />
                    {/* <form style={{ marginTop: "", marginLeft: "-575px" }}>
                        <label class="title">Embed Color</label>
                        <input class="hexcolor" id="hexcolor" placeholder="#6cb3e3"></input>
                    </form> */}
                    <div style={{ marginTop: "150px" }}>
                        <Switch>
                            <Route path="/shopify" component={Shopify} />
                            <Route path="/settings" component={settings} />
                            <Route path="/supreme" component={supreme} />
                            <Route path="/adidas" component={adidas} />
                            <Route path="/nike" component={nike} />
                            <Route path="/footsites" component={footsites} />
                            <Route path="/mesh" component={mesh} />
                            <Route path="/aio" component={aio} />
                            <Route path="/retail" component={retail} />
                            <Route path="/economic" component={economic} />
                            <Route path="/social" component={social} />
                            <Route path="/releaseinfo" component={releaseinfo} />
                            <Route path="/logs" component={logs} />
                        </Switch>
                    </div>
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

export default connect(mapStateToProps)(App);