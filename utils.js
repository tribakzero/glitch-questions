'use strict';

const https = require('https');

const getURL = (url) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      let data = '';

      response.on('data', (chunk) => {
        data += chunk;
      });

      response.on('end', () => {
        resolve(JSON.parse(data));
      });
    }).on("error", (error) => {
      reject(error);
    });
  });
};

const currentTimestamp = () => new Date().getTime();

module.exports = {
  getURL,
  currentTimestamp
}
