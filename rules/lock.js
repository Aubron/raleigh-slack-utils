'use strict';
const { WebClient } = require('@slack/web-api');
const token = process.env.SLACK_TOKEN;

const blacklist = {
    CJRU7GTS9: "/welcome"
}

module.exports.receive = async (event) => {
    const body = JSON.parse(event.body);
    console.log(body);
    if (blacklist[body.event.channel] && body.event.user) {
        console.log('not a bot');
        //user message (not a bot)
        if (!body.event.thread_ts) {
            console.log('not a thread');
            const web = new WebClient(token);
            //message isn't in a thread, needs to be deleted.
            await web.chat.delete({
                channel: body.event.channel,
                ts: body.event.ts,
                as_user: true,
            })
            await web.chat.postEphemeral({
                channel: body.event.channel,
                user: body.event.user,
                attachments: [],
                text: `:warning: Sorry, we don't allow sending messages directly to this channel, to cut down on channel spam. You can either comment on the existing threads, or use the \`${blacklist[body.event.channel]}\` command to make a new post.`
            })
        }
    }
    return {
        statusCode: 200,
        body: JSON.stringify({
        challenge: body.challenge
        }),
    };
};
