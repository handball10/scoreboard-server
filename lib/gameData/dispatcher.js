const NuHandler = require('./datahandler/nuliga');
const DhbHandler = require('./datahandler/dhb');
const ManualHandler = require('./datahandler/manual');

const handler = {
  dhb: DhbHandler,
  nu: NuHandler,
  manual: ManualHandler
};


const dispatch = async (argv) => {

  if (!Object.keys(handler).includes(argv.mode)) {
    throw new Error('Invalid mode argument');
  }

  return new handler[argv.mode](argv);
}


module.exports = {
  dispatch
};