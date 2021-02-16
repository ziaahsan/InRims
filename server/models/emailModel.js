// Load the AWS SDK for Node.js
const AWS = require('aws-sdk');
const config = require('config');

// Setup AWS config
AWS.config.update( {
   apiVersion: config.ses.apiVersion,
   accessKeyId: config.ses.accessKeyId,
   accessSecretKey: config.ses.secrectAccessKey,
   region: config.ses.region
});

// Set the region 
class EmailModel {
   constructor() {
      this.params = {
         Source: config.ses.source,
         Destination: {
            ToAddresses: []
         },
         ReplyToAddresses: config.ses.replyTo,
         Message: {
            Body: {
               Html: {
                  Charset: "UTF-8",
                  Data: "Wow! SES, Hmmmm."
               }
            },
            Subject: {
               Charset: 'UTF-8',
               Data: 'SES Mail'
            }
         },
      };

      this.ses = new AWS.SES()
   }

   send(toEmail) {
      if (!toEmail) throw "Invalid email?";
      if (toEmail.length === 0) throw "List must have at least 1 to email.";
      
      // Add toEmail to the list of emails
      this.params.Destination.ToAddresses = toEmail;
      
      // Create the promise and SES service object
      return this.ses.sendEmail(this.params).promise();
   }
}

// Export model
module.exports= EmailModel;
