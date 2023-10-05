const fs = require('fs').promises;

// const writeToFile = (fileSrc, data) => {
//   fs.writeFileSync(fileSrc, data);
// }

// File path

const writeToFile = (filePath, dataToAppend) => {


  // Data to append

  // Append to the file using writeFileAsync
  fs.writeFile(filePath, dataToAppend, { flag: 'a', encoding: 'utf8' })
    .then(() => {
      console.log('Data appended to the file.');
    })
    .catch((error) => {
      console.error('Error appending data to the file:', error);
    });
}

module.exports = writeToFile
