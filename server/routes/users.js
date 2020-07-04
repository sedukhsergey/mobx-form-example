const express = require('express');
const router = express.Router();
const Users = require('../models/Users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('users',)
  if (req.query.id) {
    next();
    return;
  }
  Users.all((err, data) => {
    if (err) {
      console.log('err from users.all',err)
      next(err);
      return;
    }
    console.log('users data',data)
    res.send(data);
  })
});

router.get('/', (req, res, next) => {
  if (req.query.id) {
    Users.find(req.query.id, (err, data) => {
      if (err) {
        next(err);
        return;
      }
      res.send(data || { data: null });
    });
  }
});

router.put('/', (req, res, next) => {
  Users.put({...req.body, id: req.query.id}, (err, data) => {
    if (err) {
      next(err)
      return;
    }
    res.send('Success')
  })
})

router.post('/', (req, res, next) => {
  console.log('req.body',req.body)
  Users.create(req.body, (err, data) => {
    if (err) {
      console.log('error users',err)
      next(err);
      return;
    }
    res.send({data: 'ok'}).json();
  })
});

router.delete('/', (req, res, next) => {
  if (req.query.id) {
    Users.delete(req.query.id, (err, data) => {
      if (err) {
        next(err);
        return;
      }
      res.send('Deleted success');
    });
  }

})

module.exports = router;
