const fs = require('fs');
const os = require('os');
let arr = [];
fs.readFile('./PrintedArea.Log', 'utf-8', (err, data) => {
    const da = data.toString().split(os.EOL);
    da.forEach(ele => {
        const ar = ele.split(' ');
        let file = `${ar[3]}\\${ar[4]}`;
        file = file.slice(0, file.length - 1);
        let timeDate = ar[5] + ar[6];
        timeDate = timeDate.slice(0, timeDate.length - 1);
        let timeReq = ar[7];
        timeReq = timeReq.slice(0, timeReq.length - 1);
        let jobDoneStat = ar[8];
        jobDoneStat = jobDoneStat.slice(0, jobDoneStat.length - 1);
        arr.push([timeDate, file, timeReq, jobDoneStat]);
    })
    arr = arr.reverse();
    fs.writeFile('output.json', JSON.stringify(arr), err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('done');
        }
    });
})