const fs = require('fs');
const prompt = require('prompt');

console.log('Set the domain (without https://):');

prompt.start();

prompt.get(['domain'], (error, result) => {

  const json = { to: 'https://' + result.domain || 'google.com' };
  fs.writeFileSync('./config/config.json', JSON.stringify(json));

  console.log('Done!');

});
