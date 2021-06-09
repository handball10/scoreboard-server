const express = require('express');
const { dispatch } = require('../lib/gameData/dispatcher');
const router = express.Router();

/* GET users listing. */
router.get('/:mode/:game', async function(req, res, next) {

  const {
      mode,
      game
  } = req.params;

  const dataHandler = await dispatch({ mode, game });
  const data = await dataHandler.prepareData();

  res.json({ data });
});

module.exports = router;
