console.log('Loading Lambda Function (v1234)');


// include some required modules
// remove these if you don't need
var https = require('https');
var AWS = require('aws-sdk');
var async = require('async');

exports.handler = function(event, context) {
    // event ohject is passed to lambda function
    console.log(JSON.stringify(event, null, 4));

    // do some work and call context
    // to notify lambda about sucess of failure
    console.log("key1:", event.key1);
    if (true) {
        context.succeed("Yay :)");
    } else {
        context.fail("Nay :(");
    }
};
