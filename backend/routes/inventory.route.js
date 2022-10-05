const router = require('express').Router();

router.get('/inventory', async (req, res, next) => {
  res.send({ message: 'Ok inventory api is working 🚀' });
});

module.exports = router;