# Backend for mentis [![CircleCI](https://circleci.com/gh/anachronic/mentis-backend.svg?style=svg)](https://circleci.com/gh/anachronic/mentis-backend)

This is a toy project that I created to learn the javascript environment. It
will consist of a blog with markdown support. This repository contains the
backend, which consists of a simple RESTful api written in Express. However,
the intention of this project is to familiarize myself with what Javascript
can offer compared to the languages I usually code in, which are Python and
Java.

With this project I intend to force myself to write tests in a test-oriented
approach, provided that the frameworks come with no annoyances when it comes
to testing. Fortunately, my experience so far at the time I'm editing this
has been wonderful. I want to set up CI and coverage properly, and write
robust Javascript code that has a good coverage percentage.

## Tools used

- [Express](https://expressjs.com)
- [Mocha](https://mochajs.org)
- [Chai](https://chaijs.com) with [Chai-HTTP](https://www.chaijs.com/plugins/chai-http/)
- [Istanbul](https://istanbul.js.org)

## Running

You know the drill, `npm install` then `npm start`.

### Testing

`npm test` for mocha tests and `nyc npm test` for coverage