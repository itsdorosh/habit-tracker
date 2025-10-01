const express = require('express');
const HabitsController = require('./habitsController');

const router = express.Router();
const habitsController = new HabitsController();

router.post('/habits', (req, res) => habitsController.createHabit(req, res));
router.get('/habits', (req, res) => habitsController.getHabits(req, res));
router.put('/habits/:id', (req, res) => habitsController.updateHabit(req, res));
router.delete('/habits/:id', (req, res) => habitsController.deleteHabit(req, res));

function setHabitRoutes(app) {
    app.use('/api', router);
}

module.exports = setHabitRoutes;