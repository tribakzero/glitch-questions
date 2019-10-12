'use strict';

const { getURL, currentTimestamp } = require('./utils');

/**
 * Makes requests to glitch.com questions endpoint and wraps it in a promise
 * @return {Promise}
*/

const makeProjectURL = (domain, path, line, character) =>
`https://glitch.com/edit/#!/${domain}?path=${path}:${line}:${character}`

const parseQuestions = questions => {
  const parsedQuestions = questions.map(question => JSON.parse(question.details));
  const output = parsedQuestions.map(data => {
    const { domain, path, line, character, question, questionId } = data;
    const url  = makeProjectURL(domain, path, line, character);
    return { url, question, questionId };
  });
  return output;
}

module.exports = () => {
  var url = 'https://api.glitch.com/projects/questions';
  return getURL(`${url}?cache=${currentTimestamp()}`)
    .then(parseQuestions);
}
