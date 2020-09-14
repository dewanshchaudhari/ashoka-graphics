const fs = require('fs');

module.exports = fs.readFileSync('output.json', 'utf-8', (err, data) => {
    return data;
});