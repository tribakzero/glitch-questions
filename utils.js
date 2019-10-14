'use strict';

const request = require('request');
const util = require('util');

const rp = util.promisify(request);

const currentTimestamp = () => new Date().getTime();

const makeRequestURL = () =>
`https://api.glitch.com/projects/questions?cache=${currentTimestamp()}`;

const makeRequest = () =>
  rp({
    method: 'GET',
    uri: makeRequestURL(),
    json: true
  });

const makeProjectURL = (domain, path, line, character) =>
  `https://glitch.com/edit/#!/${domain}?path=${path}:${line}:${character}`;

const getQuestionsDetails = (questions) => console.log(questions) &&
  questions.map(question => JSON.parse(question.body.details));

const constructOutput = ({ domain, path, line, character, question, questionId }) =>
  ({
    url: makeProjectURL(domain, path, line, character),
    question,
    questionId
  });

const parseQuestions = questions =>
  getQuestionsDetails(questions).map(details => constructOutput(details));

module.exports = { makeRequest, parseQuestions };
