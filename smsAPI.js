var request = require("request");

var options = { method: 'POST',
  url: 'https://esms.dialog.lk/api/v1/sms',
  headers: 
   { 
    'Authorization': 'Bearer XXXXXXXXXXXXXX' ,
    'content-type': 'application/json'},
  form: 
   { userId: 'abcdsdf',
     password: '12345678',
     senderId: 'x 514',
     sendMethod: 'simpleMsg',
     msgType: 'text',
     mobile: '714551682, 799999999',
     msg: 'This is a test message',
     duplicateCheck: 'true',
     format: 'json' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});