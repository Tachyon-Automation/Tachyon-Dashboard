import React from 'react';

import { withRouter } from 'react-router-dom';

const DropdownSites = props => {

    const changeSite = (e) => {
        props.history.push(`/${e.target.value}`);
    }

    return (
    <div class="dropdown">
        <select class="site-slector" onChange={changeSite}>
            <option value="shopify" default>Shopify Webhooks </option>
            <option value="supreme">Supreme Webhooks</option>
            <option value="adidas">Adidas Webhooks</option>
            <option value="nike">Nike Webhooks</option>
            <option value="footsites">Footsites Webhooks</option>
            <option value="mesh">Mesh Webhooks</option>
            <option value="aio">AIO Webhooks</option>
            <option value="retail">Retail Webhooks</option>
            <option value="economic">Economic Webhooks</option>
            <option value="social">Social Webhooks</option>
            <option value="logs">Bot Log Webhooks</option>
            <option value="releaseinfo">Release Info Webhooks</option>

        </select>
    </div>)
}

export default withRouter(DropdownSites)