// simulates lambda context object

module.exports = function() {
    return {
        succeed: function(result) {
            console.log("-> CONTEXT SUCEEED: ", result);
        },
        fail: function(err) {
            console.log("-> CONTEXT FAIL: ", err);
        },
        done: function(err, result) {
            console.log("-> CONTEXT DONEL", err, result);
        },
        functionName: 'local_function',
        awsRequestId: 'local_awsRequestId',
        logGroupName: 'local_logGroupName',
        logStreamName: 'local_logStreamName',
        clientContext: 'local_clientContext',
        identity: {
            cognitoIdentityId: 'local_cognitoIdentityId'
        }
    };
};
