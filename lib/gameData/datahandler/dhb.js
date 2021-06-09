const AbstractDataHandler = require('./abstractDataHandler');

const {
  fetchData
} = require('./datahandler');

const {
  sortByNumber
} = require('../utils');

const EVENT_TYPES = {
  GOAL: 'goal',
  GOAL_7_METER: '7_meter_goal',
  GOAL_7_MISSED: '7_meter_missed',
  PENALTY: '2_minute_penalty',
  WARNING: 'warning',
  DISQUALIFICATION: 'disqualification',
  DISQUALIFICATION_BLUE: 'disqualification_with_blue_card',
  TIMEOUT: 'timeout',
  TEAM_SUSPENSION: 'team_suspension'
};

const resourceUrl = gameId => `https://dhbdata.fmp.sportradar.com/feeds/match-details/${gameId}`;

const officialsMapper = (team) => ({ position, firstName, lastName }) => ({
  firstName,
  lastName,
  number: position.replace('official_', ''),
  key: `official-${team}-${position.replace('official_', '')}`,
  timePenalty: 0,
  warning: 0,
  disqualification: 0
});

const refereeFilter = ({ position }) => position.indexOf('_referee') > 0;

const refereeMapper = ({ firstName, lastName }, number) => ({
  firstName,
  lastName,
  number: number + 1
});

const playerMapper = ({ number, firstName, lastName, goals, id }) => ({ number, firstName, lastName, goals, id });

const playerDataMapper = ({ players, statistics, timeStatistics, team }) => {
  return players.reduce((acc, player) => {

    const {
      goals = 0,
      penaltyGoals = 0,
      penaltyMissed = 0
    } = statistics.players.find(({ playerId }) => playerId === player.id) || {};

    const {
      count = 0
    } = timeStatistics.players.find(({ firstName, lastName }) => (player.firstName === firstName && player.lastName === lastName)) || {};
    
    return [
      ...acc,
      {
        ...player,
        goals,
        penaltyGoals,
        penaltyMissed,
        timePenalty: count,
        warning: 0,
        disqualification: 0,
        key: `player-${team}-${player.id}`
      }
    ]
  }, []);
};

// const aggregateEventData = (events = []) => events.reduce((playerStats, event) => {
//   if (event.type === EVENT_TYPES.WARNING) {
//     playerStats[event.player1]
//   }

//   // } || event.type === EVENT_TYPES.DISQUALIFICATION) {
//   //   if (!playerStats[event.player1.id]) {

//   //   }
//   // }
// }, {});


module.exports = class DhbHandler extends AbstractDataHandler {
  
  constructor(options) {
    super(options);
  }

  async prepareData() {

    const response = await fetchData(resourceUrl(this.options.game));

    const { 
      teams: {
        home: teamHome,
        away: teamAway,
      },
      statistics: {
        home: statHome,
        away: statAway,
        timePenalties: {
          home: timePenaltiesHome,
          away: timePenaltiesAway
        }
      },
      events,
      results
    } = response;

    const eventAggregation = {}; //aggregateEventData(events);

    // map goals
    let homePlayers = playerDataMapper({
      players: teamHome.players.map(playerMapper),
      statistics: statHome,
      timeStatistics: timePenaltiesHome,
      team: 'home',
      eventAggregation
    });
    let homeOfficials = teamHome.officials.map(officialsMapper('home'));

    let awayPlayers = playerDataMapper({
      players: teamAway.players.map(playerMapper),
      statistics: statAway,
      timeStatistics: timePenaltiesAway,
      team: 'away',
      eventAggregation
    });

    let awayOfficials = teamAway.officials.map(officialsMapper('away'));

    homePlayers = homePlayers

    const data = {
      home: {
        longName: teamHome.club.name,
        shortName: teamHome.abbreviation,
        score: results.live.home,
        players: homePlayers.sort(sortByNumber),
        officials: homeOfficials
      },
      away: {
        longName: teamAway.club.name,
        shortName: teamAway.abbreviation,
        score: results.live.away,
        players: awayPlayers.sort(sortByNumber),
        officials: awayOfficials
      }
    };

    return data;

    // return [
      // ...home.players.sort(sortByNumber), //.map(this.formatters.homePlayerFormatter),
      // ...home.officials.map(officialsMapper), //.map(this.formatters.homeOfficialsFormatter),
      // ...away.players.sort(sortByNumber), //.map(this.formatters.guestPlayerFormatter),
      // ...away.officials.map(officialsMapper), //.map(this.formatters.guestOfficialsFormatter),
      // ...referees.filter(refereeFilter).map(refereeMapper) //.map(this.formatters.refereesFormatter)
    // ];
  }
  
}