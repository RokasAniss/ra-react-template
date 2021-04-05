const fs = require('fs');

module.exports = (filePath, toReplaceArray) => {
  fs.readFile(filePath, 'utf8', function (err, data) {
    if (err) {
      return console.log(err);
    }
    let fileData = data;

    toReplaceArray.forEach(element => {
      fileData = fileData.replace(element.from, element.to);
    });

    fs.writeFile(filePath, fileData, 'utf8', function (err) {
      if (err) return console.log(err);
    });
  });
};
