"use strict";

var express = require('express');

var router = express.Router();

var bodyParser = require('body-parser');

var _require = require('../models/index'),
    Inventory = _require.Inventory;

router.use(bodyParser.urlencoded({
  extended: false
}));
router.get('/', function _callee(req, res) {
  var inventories;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(Inventory.findAll());

        case 2:
          inventories = _context.sent;
          res.json(inventories);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
});
router.post('/', function _callee2(req, res) {
  var name, inventory;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          name = req.body.name;
          _context2.next = 3;
          return regeneratorRuntime.awrap(Inventory.create({
            name: name
          }));

        case 3:
          inventory = _context2.sent;
          res.json(inventory);

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
});
router.get('/:id', function _callee3(req, res) {
  var inventory;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(Inventory.findByPk(req.params.id));

        case 2:
          inventory = _context3.sent;
          res.json(inventory);

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  });
});
router.post('/:id', function _callee4(req, res) {
  var name, id, inventory;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          name = req.body.name;
          id = req.params.id;
          _context4.next = 4;
          return regeneratorRuntime.awrap(Inventory.update({
            name: name
          }, {
            where: {
              id: id
            }
          }));

        case 4:
          inventory = _context4.sent;
          res.json(inventory);

        case 6:
        case "end":
          return _context4.stop();
      }
    }
  });
});
router["delete"]('/:id', function _callee5(req, res) {
  var id;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          id = req.params.id;
          _context5.next = 3;
          return regeneratorRuntime.awrap(Inventory.destroy({
            where: {
              id: id
            }
          }));

        case 3:
          res.redirect('/inventory');

        case 4:
        case "end":
          return _context5.stop();
      }
    }
  });
});
module.exports = router;