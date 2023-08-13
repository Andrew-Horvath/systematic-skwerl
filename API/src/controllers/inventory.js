const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const { Inventory } = require('../models/index');

router.use(bodyParser.urlencoded({ extended: false }));

router.get('/', async (req, res) => {
    const inventories = await Inventory.findAll();
    res.json(inventories);

});

router.post('/',async (req, res) => {
    const { name } = req.body;
    const inventory = await Inventory.create({ name });
    res.json(inventory);
});

router.get('/:id', async (req, res) => {
    const inventory = await Inventory.findByPk(req.params.id);
    res.json(inventory);
});

router.post('/:id', async (req, res) => {
    const { name } = req.body;
    const { id } = req.params;
    const inventory = await Inventory.update({ name }, {
        where: { id }
    });
    res.json(inventory);
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await Inventory.destroy({
        where: { id }
    })
    res.redirect('/inventory');
});

module.exports = router