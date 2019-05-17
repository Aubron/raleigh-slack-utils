'use strict';
const querystring = require('querystring');
const { WebClient } = require('@slack/web-api');
const questions = require('./questions')

const token = process.env.SLACK_TOKEN;
const channel = "#stdout";

const getBlocks = (form, user) => {
    const blocks = [{
        type: "section",
        text: {
            type: "mrkdwn",
            text: `*Welcome @${user.name} to the Slack!*`
        }
    },{
        type: "divider"
    }];
    let keys = Object.keys(form);
    for ( let i = 0; i < keys.length; i += 1) {
        let key = keys[i];
        let value = form[key];
        if (value !== null && value !== "NA") {
            blocks.push({
                type: "section",
                text: {
                    type: "mrkdwn",
                    text: `*${questions[i].label}*
${value}`
                }
            })
        }
    }
    return blocks;
}

module.exports.handle = async (event) => {
    const web = new WebClient(token);
    const payload = JSON.parse(querystring.parse(event.body).payload);
    switch(payload.callback_id) {
        case 'welcome_form':
            const userResponse = await web.users.info({
                user: payload.user.id
            })
            await web.chat.postMessage({
                channel,
                username: userResponse.user.profile.real_name,
                icon_url: userResponse.user.profile.image_512,
                blocks: getBlocks(payload.submission, userResponse.user)
            })
            break;
        default:
            console.log(payload.callback_id);
    }
    return {
        statusCode: 200,
    };
};
