const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

const { User, Roles, LoginToken } = require('../models/index');

router.get('/', async (req, res) => {
    const users = await User.findAll({
        include: [ Roles, LoginToken ]
    });
    res.json(users); 
});

router.post('/', async (req, res) => {
    const user = await User.create(req.body)
    res.json(user);
});

router.get('/:id', async (req, res) => {
    const user = await User.findByPk(req.params.id, {
        include: Roles
    });
    const permissions = await user.Role.getPermissions();
    res.json({ user, permissions });
});

router.post('/:id', async (req, res) => {
    const { id } = req.params;
    const user = await User.update(req.body, {
        where: { id }
    })
    res.json(user)
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const deleteUser = await User.destroy({
        where: { id }
    })
    res.json({ 'Success': deleteUser })
});

module.exports = router;