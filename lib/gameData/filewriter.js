const path = require('path');
const fs = require('fs');

const writeFile = async (data = []) => {
  const fileData = data.join('\r\n');

  const filePath = path.resolve('./', 'aufstellung.txt');

  console.log(filePath);

  try {
    fs.writeFileSync(filePath, fileData);
    return true;
  }
  catch (err) {
    console.error(err);
    return false;
  }
}

module.exports = {
  writeFile
};