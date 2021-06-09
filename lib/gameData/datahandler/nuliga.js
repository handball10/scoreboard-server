const AbstractDataHandler = require('./abstractDataHandler');
const {
  fetchData
} = require('./datahandler');

const {
  sortByNumber
} = require('../utils');


const playerResource = gameId => `https://hbde-live.liga.nu/nuScoreLiveRestBackend/api/1/players/${gameId}/time/${new Date().getTime()}`;
const officialsResource = gameId => `https://hbde-live.liga.nu/nuScoreLiveRestBackend/api/1/officials/${gameId}/time/${new Date().getTime()}`;

const isHome = person => person.teamHome;
const isGuest = person => !isHome(person);

const playerDataMapper = ({firstname, lastname, nr, teamHome}) => ({
  firstName: firstname,
  lastName: lastname,
  number: nr,
  teamHome
});

const officialsDataMapper = ({firstname, lastname, nr = '', teamHome}) => ({
  firstName: firstname,
  lastName: lastname,
  number: nr.toLowerCase(),
  teamHome
});

module.exports = class NuHandler extends AbstractDataHandler {
  
  constructor(options) {
    super(options);
  }

  async prepareData() {
    const [
      dataPlayers,
      dataOfficials
    ] = await Promise.all([ 
      fetchData(playerResource(this.options.game)),
      fetchData(officialsResource(this.options.game))
    ]);
  
    // const allPersons = [...players.meetingPersons, ...officials.meetingPersons];

    return [
      ...dataPlayers.meetingPersons.filter(isHome).map(playerDataMapper).sort(sortByNumber).map(this.formatters.homePlayerFormatter),
      ...dataPlayers.meetingPersons.filter(isGuest).map(playerDataMapper).sort(sortByNumber).map(this.formatters.guestPlayerFormatter),
      ...dataOfficials.meetingPersons.map(officialsDataMapper).filter(isHome).map(this.formatters.homeOfficialsFormatter),
      ...dataOfficials.meetingPersons.map(officialsDataMapper).filter(isGuest).map(this.formatters.guestOfficialsFormatter)
    ];


  }
  
}