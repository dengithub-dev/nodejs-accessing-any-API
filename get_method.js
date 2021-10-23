const http = require('http');
var req = require('request');

var options = {
  'method': 'GET',
  'url': 'API_url_here',
  'headers': {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
};

const server = http.createServer((request, response) => {
    req(options, function (error, data){
        if (error) throw new Error(error);
        response.write(data.body); //writing the output in browser
        response.end();
    });
});

server.listen(3000, () => {
    console.log('Server is running...');
});
