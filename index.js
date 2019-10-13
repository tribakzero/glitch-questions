'use strict';

const { makeRequest, parseQuestions } = require('./utils');

/**
 * Makes requests to glitch.com questions endpoint and wraps it in a promise
 * @return {Promise}
*/

module.exports = () =>
  makeRequest().then(res => parseQuestions(res));
