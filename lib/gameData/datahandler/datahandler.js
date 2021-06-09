const fetch = require('node-fetch');

const fetchData = async url => {
  try {
    const response = await fetch(url, {
        mode: 'no-cors'
    });
    
    return await response.json();
  }
  
  catch (e) {
    console.log(e);

    return {};
  }
}

module.exports = {
  fetchData
};