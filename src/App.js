import React, {Component} from 'react';
import './App.css';
import 'primereact/resources/themes/rhea/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';

import shopify from './shopify';
import footsites from './footsites';
import mesh from './mesh';
import aio from './aio';
import retail from './retail';

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
                <h1 class="brand">TachyonMonitors</h1>
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
                <select class="site-slector">
                <option value="shopify" default>Shopify Webhooks </option>
                <option value="footsites">Footsites Webhooks</option>
                <option value="mehs">Mesh Webhooks</option>
                <option value="aio">AIO Webhooks</option>
                <option value="retail">Retail Webhooks</option>
                </select>
                </div>
                    <div style={{marginTop:"150px"}}>
                        <Switch>
                            <Route exact path="/" component={shopify} />
                            <Route path="/shopify" component={shopify} />
                            <Route path="/footsites" component={footsites} />
                            <Route path="/mesh" component={mesh} />
                            <Route path="/aio" component={aio} />
                            <Route path="/retail" component={retail} />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;