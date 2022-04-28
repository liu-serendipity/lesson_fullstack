const fs = require('fs'); 

fs.stat('./a.text', function(err,data) {
    if(err) {
        console.log(err);
        return;
    }
    console.log(data,'-------------------');
})

const info = fs.statSync('./a.text')
console.log(info,'++++++++++++++++++');