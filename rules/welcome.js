'use strict';
const querystring = require('querystring');
const { WebClient } = require('@slack/web-api');
const token = process.env.SLACK_TOKEN;
const questions = require('./questions')

const dialog = {
  callback_id: "welcome_form",
  title: "Introduce Yourself",
  submit_label: "Send",
  elements: questions
}

module.exports.reply = async (event) => {
  const web = new WebClient(token);
  const query = querystring.parse(event.body)
  await web.dialog.open({
    trigger_id: query.trigger_id,
    dialog
  }).catch((err) => {
    if (err.data.response_metadata) {
      console.log(err.data.response_metadata)
    }
    console.log('error happening', err);
    return {
      statusCode: 200
    }
  })
  return {
    statusCode: 200
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
