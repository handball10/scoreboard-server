const AbstractDataHandler = require('./abstractDataHandler');
const readline = require('readline');

const {
  sortByNumber
} = require('../utils');

/**
 * 
 * @param {String} line 
 */
const inputHandler = line => {
  let [ fullmatch, number, name ] = line.split(/^([\d]+|[abcdef]) (.*)$/ );

  const [ firstName, ...lastName ] = name.split(' ');

  return {
    number,
    firstName,
    lastName: lastName.join(' '),
    official: isNaN(number)
  };
};

const isOfficial = ({ official }) => official;
const isPlayer = ({ official }) => !official;

module.exports = class ManualHandler extends AbstractDataHandler {

  constructor(options) {
    super(options);
  }

  async prepareData() {

    const rl = readline.createInterface({
      input: process.stdin,
      output: null
    });

    const { home, guest, referee } = await new Promise((resolve, reject) => {

      let mode = 'home';

      const add = person => data[mode] = [...data[mode], person];

      const data = {
        home: [],
        guest: [],
        referee: []
      };

      rl.on('line', line => {

        let input;
    
        const isModeCommand = line.match(/^\-\-(home|guest|referee)$/);

        if (isModeCommand !== null) {
          mode = isModeCommand[1];
          return;
        }

        else if (line === '--') {
          resolve(data);
          return;
        }

        // else if ()

        add(inputHandler(line));

      });



    });

    rl.close();

    return [
      ...home.filter(isPlayer).sort(sortByNumber).map(this.formatters.homePlayerFormatter),
      ...home.filter(isOfficial).map(this.formatters.homeOfficialsFormatter),
      ...guest.filter(isPlayer).sort(sortByNumber).map(this.formatters.guestPlayerFormatter),
      ...guest.filter(isOfficial).map(this.formatters.guestOfficialsFormatter),
      ...referee.map(this.formatters.refereesFormatter)
    ];


  }


}