const prompt = require('prompt-sync')();
const http = require('http');
var req = require('request');
const date = require('date-and-time');

const id = prompt('id: ');

var options = {
  'method': 'GET',
  'url': 'API_url_here/' + id,
  'headers': {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
};*/
const server = http.createServer((request, response) => {
    req(options, function (error, data){
        if (error) throw new Error(error);
        response.write(data.body);
        response.end();
    });
});

server.listen(3000, () => {
    console.log('Server is running...');
});
