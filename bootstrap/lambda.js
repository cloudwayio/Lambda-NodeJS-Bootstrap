var lambda = require('./MyFunction.js');
var context = require('./context.js');
var event = require('./event.js');

lambda.handler(event, context);

