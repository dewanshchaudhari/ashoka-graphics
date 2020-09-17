const fs = require('fs');
const os = require('os');
const output = {};
let arr = [];
let counter = 0;
fs.readFile('PrintedArea.Log', 'utf-8', (err, data) => {
    const content = data;
    const lines = content.split(os.EOL);
    lines.forEach(line => {
        const linedata = line.split(" ");
        output[counter] = {
            time: linedata[0] + linedata[1],
            path: linedata[3],
            file: linedata[4],
            data: linedata[5] + linedata[6],
            time_req: linedata[7],
            percent_comp: linedata[8],
            machine: linedata[10],
        }
        counter++;
        // console.log(output);
    });
    counter = 0;
    for (let index = 0; index < 100; index++) {
        const element = output[index];
        arr.push(element);
    }
    arr = arr.reverse();
    fs.writeFile('output.json', JSON.stringify(arr), err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('done');
        }
    });
});