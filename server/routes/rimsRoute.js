"use strict";
const Crypto = require('crypto-random-string');
const { check, validationResult } = require('express-validator');
const fs = require('fs');

module.exports = (app, ses) => {
   app.get('/rims', async (req, res) => {
      // Get the param :slug and decode uri
      let { slug } = req.params;
      slug = encodeURIComponent(String(slug));

      fs.readFile('data/rims.json', 'utf8', (e, data) => {
         if (e) return console.log(e)

         // Setup the header for JSON
         res.setHeader('Content-Type', 'application/json');

         // Show the success message
         res.status(200).json(
            JSON.parse(data)
         );
      });
   });

   // Saving request data to file
   app.post('/rims',
      [
         check('phone', 'Make sure your phone number is correct.').isNumeric(),
         check('location', 'Provided location is not valid.').isLength({ min: 2 }).trim().escape().stripLow(),
         check('title', 'Provided title is invalid.').isLength({ min: 2 }).trim().escape().stripLow()
      ],
      async (req, res) => {
         // Handle error of body params
         const errors = validationResult(req);
         if (!errors.isEmpty()) {
            return res.status(400).json({
               error: true,
               message: errors.array(),
            });
         }

         // Post request data
         const { headers, body } = req;
         body.token = Crypto({
            length: 4,
            type: 'alphanumeric'
         });

         // @todo: Save the files outside the repository
         try {
            fs.writeFileSync(`data/requests/${Date.now()}.txt`, JSON.stringify({ headers, body }, null, 3));
            return res.status(200).json({
               token: body.token
            });
         } catch (err) {
            return res.status(400).json({
               error: true,
               message: [{
                  value: '',
                  msg: 'Something went wrong internally. Leave feedback for error #1.',
                  param: 'fatal',
                  location: 'body',
               }],
            });
         }
      }
   );
}