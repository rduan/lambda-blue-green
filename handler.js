'use strict';

module.exports.hello = (event, context, callback) => {

  console.log("will sleep 70000....")

  setTimeout(() => {
    console.log("wake up...");
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        // message: 'Go Serverless v1.0!!',
        message: 'Go Serverless v2.0! Your function executed successfully!',
        input: event,
      }),
    };
  
    console.log(JSON.stringify(response));
    callback(null, response);  
  }, 70000);

};
