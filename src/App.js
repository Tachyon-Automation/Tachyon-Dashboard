import React, {Component} from 'react';
import './App.css';
import 'primereact/resources/themes/rhea/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';

import shopify from './shopify';
import supreme from './supreme';
import adidas from './adidas';
import nike from './nike';
import footsites from './footsites';
import mesh from './mesh';
import aio from './aio';
import retail from './retail';
import economic from './economic';
import social from './social';
import releaseinfo from './releaseinfo';
import logs from './logs';
class App extends Component{

    constructor() {
        super();
        this.state = {
        };
    }

    render()
    {
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
                <div class="dropdown">
                <button class="site-slector">Shopify Webhooks
                <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                <a href="#/shopify">Shopify Webhooks</a>
                <a href="#/supreme">Supreme Webhooks</a>
                <a href="#/adidas">Adidas Webhooks</a>
                <a href="#/nike">Nike Webhook</a>
                <a href="#/footsites">Footsites Webhooks</a>
                <a href="#/mesh">Mesh Webhooks</a>
                <a href="#/aio">AIO Webhooks</a>
                <a href="#/retail">Retail Webhooks</a>
                <a href="#/economic">Economic Webhooks</a>
                <a href="#/social">Social Webhooks</a>
                <a href="#/logs">Bot Log Webhooks</a>
                <a href="#/releaseinfo">Release Webhooks</a>
               </div>
                </div>

                    <div style={{marginTop:"150px"}}>
                        <Switch>
                            <Route exact path="/" component={shopify} />
                            <Route path="/shopify" component={shopify} />
                            <Route path="/supreme" component={supreme} />
                            <Route path="/adidas" component={adidas} />
                            <Route path="/nike" component={nike} />
                            <Route path="/footsites" component={footsites} />
                            <Route path="/mesh" component={mesh} />
                            <Route path="/aio" component={aio} />
                            <Route path="/retail" component={retail} />
                            <Route path="/economic" component={economic} />
                            <Route path="/social" component={social} />
                            <Route path="/logs" component={logs} />
                            <Route path="/releaseinfo" component={releaseinfo} />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;