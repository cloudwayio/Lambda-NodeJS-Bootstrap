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

### More

You may modify ```MyFunction.js``` and implement your own function. If you want to change function name then you will have to modify lambda.js in order to reflect the change.

You can modify ```event.js``` in order to send sample events to your lambda function.

Use ```npm install``` to install required modules. ```async``` module is already installed, as it is almost a must.

### Packing

    $ sh package.sh 
      adding: node_modules/ (stored 0%)
      adding: node_modules/async/ (stored 0%)
      adding: node_modules/async/package.json (deflated 61%)
      adding: node_modules/async/lib/ (stored 0%)
      adding: node_modules/async/lib/async.js (deflated 80%)
      adding: MyFunction.js (deflated 43%)

This creates a ```zip``` file which can be uploaded to AWS Lambda.

