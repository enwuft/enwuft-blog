---
title: Testing in Browsers and Node with Mocha, Chai, Sinon, and Testem
date: "2013-12-03"
path: /docs/testing-in-browsers-and-node
tags: javascript, testing, node, browser
layout: post
---

So you're writing some JavaScript code that has to run in multiple web
browsers as well as Node. How can you effectively test this code? Effective
testing means that you should be able to run all tests in all environments on
demand, i.e., with the press of a single button the tests should run in Node,
Chrome, Firefox, Internet Explorer, and whatever other environments you have
set up for testing, and we should avoid code duplication whenever possible.
Continue reading and I'll walk you through setting up a basic testing
environment using [Mocha][mocha] as a testing framework, [Chai][chai] for
assertions, [Sinon][sinon] for mocking, and [Testem][testem] as a universal
test runner. Basic knowledge of testing, asserting, and mocking in languages
other than JavaScript is assumed. Those of you who are familiar with testing,
asserting, and mocking in JavaScript will want to [skip to the
Testem](#testem) section below -- that's where the meat and potatoes of
pulling everything together into a working example is.

## Mocha

[Mocha][mocha] is a testing framework for JavaScript which provides a
flexible, intuitive, and consistent interface for testing JavaScript code,
both synchronous and asynchronous. Additionally, it is designed to run in both
major browsers and Node.

Without further to do, a basic test suite looks like the following:

```js
describe("Library Tests", function () {
  before(function () {
    // set up the environment
  });

  it("Should add numbers", function () {
    // make assertions
  });
});
```

The above code should be fairly self-explanatory. `describe` is used to
describe a test suite, and `it` is used to define actual tests. I am also
making use of a `before` hook to set up the environment prior to running any
tests. In addition to the `before` hook, Mocha makes available the `after`
hook, which executes after all tests have run. The `before` and `after` hooks
additionally have `beforeEach` and `afterEach` counterparts, which, as their
names imply, rather than running before or after all tests run before and
after each individual test.

### Asynchronous Testing

One of the advantages of using Mocha as opposed to certain other testing
frameworks is that it makes asynchronous testing really easy. Consider the
following test:

```js
it("should foobar", function (done) {
  // Simulate calling an asynchronous method with `setTimeout`
  setTimeout(function () {
    // Make assertions
    done();
  }, 1000);
});
```

## Conclusion

This article is meant to get you familiar with the basics of multi-environment
testing in JavaScript. More articles about each of the above projects
featuring more advanced features are in the pipeline. In the meantime, you can
read the official documentation of each project here:

- [Mocha][mocha]
- [Chai][chai]
- [Sinon][sinon]
- [Testem][testem]

[mocha]: http://visionmedia.github.io/mocha/ "Mocha"
[chai]: http://chaijs.com/ "Chai"
[sinon]: http://sinonjs.org/ "Sinon"
[testem]: https://github.com/airportyh/testem "Testem"
[mdngs]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#Defining_getters_and_setters "Defining Getters and Setters"
[bdd]: http://chaijs.com/api/bdd/ "Chai BDD API"
[chaiplugins]: http://chaijs.com/plugins "Chai Plugins"
[spies]: http://sinonjs.org/docs/#spies "Sinon Spies API"
[matchers]: http://sinonjs.org/docs/#sinon-match "Sinon Matchers API"
[stubs]: http://sinonjs.org/docs/#stubs "Sinon Stubs API"
[mocks]: http://sinonjs.org/docs/#mocks "Sinons Mocks API"
[sinonchai]: http://chaijs.com/plugins/sinon-chai "Sinon-Chai Plugin Documentation"
[sinondocs]: http://sinonjs.org/docs "Sinon Official Documentation"
[jquery]: http://jquery.com "jQuery"
[node]: http://nodejs.org "Node"
[nvm]: https://github.com/creationix/nvm "Node Version Manager"
[windows]: https://github.com/airportyh/testem#known-issues "Windows Workaround"
[tap]: http://en.wikipedia.org/wiki/Test_Anything_Protocol "Test Anything Protocol"
[github-project]: https://github.com/KenPowers/testing-in-browsers-and-node "GitHub Project"
