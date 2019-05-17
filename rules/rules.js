'use strict';

const text = 
`*Testing 1 2 3*

Not sure if this works. _Hope it does._
`

const blocks = [
	{
		"type": "section",
		"text": {
			"type": "mrkdwn",
			"text": "Hey there 👋 Welcome to the Triangle Community slack! *The purpose of this slack is to connect individuals in the Triangle through public and private chats, as well as event invites.*"
		}
	},
	{
		"type": "divider"
	},
    {
		"type": "section",
		"text": {
			"type": "mrkdwn",
			"text": "*#welcome Channel :wave:*"
		}
	},
    {
		"type": "section",
		"text": {
			"type": "mrkdwn",
			"text": "*The welcome channel is for introducing yourself!* To give you some fun prompts, and cut down on spam, we have a command, `/welcome`, that walks you through some ice breaker questions and posts your answers in the #welcome channel. It'll also make a thread for folks to welcome you to the community! Any messages outside this thread will automatically be removed, to keep the channel quiet. *Just type /welcome into the chat box of any channel to start!*"
		}
	},
	{
		"type": "divider"
	},
    {
		"type": "section",
		"text": {
			"type": "mrkdwn",
			"text": "*#events Channel :calendar:*"
		}
	},
    {
		"type": "section",
		"text": {
			"type": "mrkdwn",
			"text": "*The events channel is for advertising public events.* Feel free to only accept a certain number of people, or gate the event behind handing out it's location, but if you're posting in #events, expect a crowd. You'll need to use the `/event` command to post an event to this channel. It'll walk you through setting up the event, and post it to the channel you're currently in. It'll even track people who are interested or going, and add them to a private slack channel to discuss the event. *Just type /event into the chat box of #events to start.*"
		}
	},
    {
		"type": "section",
		"text": {
			"type": "mrkdwn",
			"text": ":face_with_finger_covering_closed_lips: _PSSSST_: You can use `/event` in any channel (except #welcome), and it will go into the channel you're in. You can use this to only send your event to a smaller, private group (and we'd recommend that for a lot of smaller get togethers!)"
		}
	},
	{
		"type": "divider"
	},
    {
		"type": "section",
		"text": {
			"type": "mrkdwn",
			"text": "*Community Rules*"
		}
	},
	{
		"type": "section",
		"text": {
			"type": "mrkdwn",
			"text": "1️⃣ {RULES GO HERE}"
		}
	}
]

module.exports.reply = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
        blocks,
    }),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
