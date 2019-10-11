'use strict';

var { expect } = require('chai');
var glitchQuestions = require('../index');

describe('glitchQuestions', function () {
  it('should return a promise', function () {
    var result = glitchQuestions();
    expect(result).to.be.a('promise');
  });
})
