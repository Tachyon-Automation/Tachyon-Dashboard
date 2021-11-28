const fetch = require('node-fetch')
const { v4: uuidv4 } = require('uuid');
require('dotenv').config({ path: __dirname + '/../../.env' })

const express = require('express');
const app = express();
const port = 9000;
app.use(express.json())

const database = require('./database')

let masterHooks = []
let userData = {}
let isChanged = false

let accessTokens = {}

app.listen(port, async () => {
    await fetchAllUserData()
    updateMasterHookList(true)
    pushAllUserData(true)
    console.log(`[LISTEN] Listening on port ${port}`)
});

app.post('/getaccess', async (req, res) => {
    let body = req.body;
    // console.log("body", body)
    if (!body.code) {
        res.sendStatus(400)
        return;
    }

    let details = {
        'client_id': '813827235630284870',
        'client_secret': 'B70m3BOtejJj72oxFE72Rw5zKv1tmg4e',
        'grant_type': 'authorization_code',
        'code': body.code,
        'redirect_uri': process.env.REACT_APP_IS_LOCALHOST ? 'http://localhost:3000/' : 'https://dash.tachyonrobotics.com/'
    }

    var formBody = new URLSearchParams(details)

    let fetchResp = await fetch('https://discord.com/api/v8/oauth2/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: formBody
    })
    if (fetchResp.status !== 200) {
        console.log("Bruh not valid code wtf")
        console.log(await fetchResp.json())
        res.sendStatus(403);
        return
    }
    let oauthData = await fetchResp.json()
    // console.log(oauthData)

    let userResult = await fetch('https://discord.com/api/users/@me', {
        headers: {
            authorization: `${oauthData.token_type} ${oauthData.access_token}`,
        },
    });

    let userBody = await userResult.json()
    if(!userData[userBody.id]) {
        console.log("Failed login:", userBody.username + "#" + userBody.discriminator, userBody.email)
        res.sendStatus(401);
        return;
    }
    console.log(userBody.username + "#" + userBody.discriminator, "logged in!" + ` (${userBody.email})`)

    let UUID = uuidv4()
    accessTokens[userBody.id] = UUID;

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
        discord: {
            id: userBody.id,
            username: userBody.username,
            discriminator: userBody.discriminator,
            avatar: userBody.avatar
        },
        webhooks: userData[userBody.id],
        access_token: UUID
    }))
    // console.log(accessTokens)
})

app.post('/storehooks', (req, res) => {
    let body = req.body;
    console.log(body)
    if (!body.access_token) {
        res.sendStatus(400)
        return;
    }
    if (!body.webhooks) {
        res.sendStatus(400)
        return;
    }

    let discordID;
    for (let key of Object.keys(accessTokens)) {
        if (accessTokens[key] === body.access_token) {
            discordID = key;
            break;
        }
    }
    if (!discordID) {
        res.sendStatus(403);
        return;
    }
    let tempHooks = []
    for (let hook of body.webhooks) {
        if (!masterHooks.includes(hook.name)) {
            console.log("[400]", discordID, "did not have master related hook", hook.name)
            // console.log(masterHooks)
            res.sendStatus(400)
            return;
        }
        if (!hook.url.match(/discord.com\/api\/webhooks\/([^\/]+)\/([^\/]+)/)) {
            console.log("[400]", discordID, "did not have valid hook", hook.url)
            res.sendStatus(400)
            return;
        }
        if (tempHooks.includes(hook.name)) {
            res.sendStatus(400)
            return;
        }
        tempHooks.push(hook.name)

        if (!userData[discordID])
            userData[discordID] = {}
        userData[discordID][hook.name] = hook.url
    }
    // console.log(userData[discordID])
    isChanged = true
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
        webhooks: userData[discordID]
    }))
});

async function pushAllUserData(recurring, sleepInterval = 10000) {
    while (true) {
        if (!isChanged) {
            await sleep(sleepInterval)
            continue
        }
        let PROMISES = []
        let keys = Object.keys(userData)
        for (let id of keys) {
            PROMISES.push(database.query(`UPDATE users SET webhooks='${JSON.stringify(userData[id])}' WHERE discordid='${id}'`))
        }
        const results = await Promise.all(PROMISES.map(p => p.catch(e => e)));
        const invalidResults = results.filter(result => (result instanceof Error));
        if (invalidResults.length > 0) {
            console.log("Error pushing user data!")
            console.log(invalidResults)
        } else
            console.log("[PUSH-UPDATE] Pushed user data! Total length: " + keys.length)
        isChanged = false
        if (!recurring)
            break;
    }
}

async function fetchAllUserData() {
    let query = await database.query('SELECT * FROM users');

    for (let row of query.rows) {
        let discordID = row.discordid;
        let webhooks = JSON.parse(row.webhooks)

        userData[discordID] = webhooks
    }

    // console.log("[FETCH-UPDATE] Loaded user data! Total Users: " + query.rows.length)
    // console.log(userData)
}

async function updateMasterHookList(recurring, sleepInterval = 10000) {
    while (true) {
        let query = await database.query('SELECT * FROM webhook_list');
        for (let row of query.rows) {
            masterHooks.push(row.name)
        }
        // console.log("[HOOK-UPDATE] Fetched webhook data! Total masters: " + query.rows.length)
        await fetchAllUserData()

        if (!recurring)
            break;
        await sleep(sleepInterval)
    }
}


async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}