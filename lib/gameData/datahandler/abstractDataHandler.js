
const {
  formatterPlayer,
  formatterOfficials,
  formatterReferees
} = require('../formatter/formatter');

class AbstractDataHandler {
  constructor(options) {

    if ((options.game === null || options.game === '0') && options.mode !== 'manual') {
      throw new Error('Invalid game parameter value!');
    }

    this.options = options;
    this.formatters = {
      homePlayerFormatter: formatterPlayer(this.options.home, this.options['home-prefix']),
      guestPlayerFormatter: formatterPlayer(this.options.guest, this.options['guest-prefix']),
      homeOfficialsFormatter: formatterOfficials(this.options.home, this.options['home-prefix']),
      guestOfficialsFormatter: formatterOfficials(this.options.guest, this.options['guest-prefix']),
      refereesFormatter: formatterReferees(this.options['referees-prefix'])
    }
  }
}

module.exports = AbstractDataHandler;