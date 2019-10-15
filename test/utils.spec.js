'use strict';

var { expect } = require('chai');
var sandbox = require('sinon').createSandbox();
var {
  getTimestamp,
  makeRequestURL,
  makeRequest
} = require('../utils');

describe('getTimestamp', function () {
  before(() => {
    sandbox.stub(Date.prototype, 'getTime').returns(666000);
  });

  after(() => {
    sandbox.restore();
  });

  it('should return an integer', function () {
    var result = getTimestamp();
    expect(result).to.be.a('number');
  });
  it('should return 666000', function () {
    var result = getTimestamp();
    expect(result).to.be.equal(666000);
  });
});

describe('makeRequestURL', function () {
  before(() => {
    sandbox.stub(Date.prototype, 'getTime').returns(666000);
  });

  after(() => {
    sandbox.restore();
  });

  it('should return an url with cache', function () {
    var result = makeRequestURL();
    expect(result).to.be.equal('https://api.glitch.com/projects/questions?cache=666000')
  });
});