import React, { Component } from 'react';
import './App.css';
import 'primereact/resources/themes/rhea/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import shopify from './sites/shopify';
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

class App extends Component {

    constructor() {
        super();
        this.state = {
        };
    }

    changeSite = (e) => {
        this.props.history.push(`/${e.target.value}`);
    }

    render() {
        return (
            <Router>
                <div class="App" >
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
                    <form style={{ marginTop: "", marginLeft: "-575px"}}>
                        <label class="title">Embed Color</label>
                        <input class="hexcolor" id="hexcolor" placeholder="#6cb3e3"></input>
                        </form>
                    <div style={{ marginTop: "150px" }}>
                        <Switch>
                            <Route exact path="/" component={shopify} />
                            <Route path="/shopify" component={shopify} />
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
                
                
            </Router>
        );
    }
}

export default App;