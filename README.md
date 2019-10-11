# Glitch Questions
[![Build Status](https://travis-ci.org/tribakzero/glitch-questions.svg?branch=master)](https://travis-ci.org/tribakzero/glitch-questions)
[![Coverage Status](https://coveralls.io/repos/github/tribakzero/glitch-questions/badge.svg?branch=master)](https://coveralls.io/github/tribakzero/glitch-questions?branch=master)

A simple method that checks for questions on Glitch

## Installation

  `npm install glitch-questions`

## Usage

```
    var glitchQuestions = require('glitch-questions');

    glitchQuestions.then(...);
```
  
  Output is a promise that returns this structure:

```
[
  {
    url: 'https://glitch.com/edit/#!/project?path=index.js:10:5',
    question: 'Question title',
  },
  ...
]
```


## Tests

  `npm test`