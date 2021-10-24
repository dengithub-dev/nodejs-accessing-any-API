var request = require('request');
var options = {
  'method': 'POST',
  'url': 'your_url_here',
  'headers': {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({"json_key":"json_value"})

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
