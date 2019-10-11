'use strict';

const { getURL, currentTimestamp } = require('./utils');

/**
 * Makes requests to glitch.com questions endpoint and wraps it in a promise
 * @return {Promise}
*/

module.exports = () => {
  var url = 'https://api.glitch.com/projects/questions';
  return getURL(`${url}?cache=${currentTimestamp()}`);
}
