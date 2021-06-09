const formatterPlayer = (team, prefix) => ({ number, firstName, lastName }) => `${prefix}${number}\tNr.${number} ${firstName} ${lastName} (${team})`;

const formatterOfficials = (team, prefix) => ({ number, firstName, lastName }) => `${prefix}${number}\t${firstName} ${lastName} (${team})`;

const formatterReferees = prefix => ({ number, firstName, lastName }) => `${prefix}${number}\t${firstName} ${lastName}`;

module.exports = {
  formatterPlayer,
  formatterOfficials,
  formatterReferees
};