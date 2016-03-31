## 7 steps to have a local AWS Lambda / Node.js development environment

### Install Node.js

[Check here](https://nodejs.org/en/)

### Install aws-sdk

    npm install aws-sdk

### Configure aws-sdk

Create a credentials file at ~/.aws/credentials on Mac/Linux or C:\Users\USERNAME\.aws\credentials on Window.

    [default]
    aws_access_key_id = your_access_key
    aws_secret_access_key = your_secret_key

### Clone Lambda-NodeJS-Bootstrap

    git clone https://github.com/cloudwayio/Lambda-NodeJS-Bootstrap.git

You will see a folder named ```bootstrap```  and a readme file.

    $ cd Nambda-NodeJS-Bootstrap
    $ ls -1
    bootstrap
    LICENSE

### Try it as it is

    $ cd bootstrap/
    $ ls
    context.js  event.js  lambda.js  MyFunction.js  node_modules  package.sh

Run ```lambda.js``` which wraps lambda function implemented in ```MyFunction.js``` and passes ```context``` and ```event``` objects.

    $ node lambda.js
    Loading Lambda Function (v1234)
    {
        "key1": "value1",
        "key2": "value2",
        "key3": "value3",
        "key4": "value4"
    }
    key1: value1
    -> CONTEXT SUCEEED:  Yay :)

If you want to use different profiles you may use `run.sh` which will use a specific profile before calling `node lambda.js`. Edit `run.sh` before you run it to be sure it has correct profile.

    #!/bin/bash
    AWS_PROFILE=my-profile node lambda.js

### Developing New AWS Lambda Functions

You may modify ```MyFunction.js``` and implement your own function. If you want to change file name then you will have to modify lambda.js in order to reflect the change.

You can modify ```event.js``` in order to send differnt events to your lambda function.

Use ```npm install``` to install required modules. ```async``` module is already installed, as it is almost a must.

### Packing and Deploying Lambda Function

    $ sh package.sh
      adding: node_modules/ (stored 0%)
      adding: node_modules/async/ (stored 0%)
      adding: node_modules/async/package.json (deflated 61%)
      adding: node_modules/async/lib/ (stored 0%)
      adding: node_modules/async/lib/async.js (deflated 80%)
      adding: MyFunction.js (deflated 43%)

This creates a ```zip``` file which can be uploaded to AWS Lambda directly or to an S3 bucket and referenced by your lambda function.

