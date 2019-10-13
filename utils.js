'use strict';

const rp = require('request-promise-native');

const currentTimestamp = () => new Date().getTime();

const makeRequestURL = () =>
`https://api.glitch.com/projects/questions?cache=${currentTimestamp()}`;

const makeRequest = () => rp({ uri: makeRequestURL(), json: true });

const makeProjectURL = (domain, path, line, character) =>
  `https://glitch.com/edit/#!/${domain}?path=${path}:${line}:${character}`;

const getQuestionsDetails = (questions) =>
  questions.map(question => JSON.parse(question.details));

const constructOutput = ({ domain, path, line, character, question, questionId }) =>
  ({
    url: makeProjectURL(domain, path, line, character),
    question,
    questionId
  });

const parseQuestions = questions =>
  getQuestionsDetails(questions).map(details => constructOutput);

module.exports = { makeRequest, parseQuestions };
