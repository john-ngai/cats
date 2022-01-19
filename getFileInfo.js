const fs = require('fs');

const getFileInfo = (fileName, callback) => {
  fs.readFile(`./data/${fileName}.txt`, 'utf8', (error, data) => {
    if (!error) {
      callback(fileName, data);
    }
  });
}

const printFileName = (fileName, data) => console.log(`${fileName}: ${data}`);

let file = 'file1';

getFileInfo(file, printFileName);