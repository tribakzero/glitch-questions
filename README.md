# Glitch Questions

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