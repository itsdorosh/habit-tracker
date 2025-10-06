class HabitsController {
    constructor() {
        this.habits = [];
        this.currentId = 1;
    }

    createHabit(req, res) {
        const { name, description } = req.body;

        // Validation
        if (!name || typeof name !== 'string' || name.trim().length === 0) {
            return res.status(400).json({ message: 'Name is required and must be a non-empty string.' });
        }
        if (description && typeof description !== 'string') {
            return res.status(400).json({ message: 'Description must be a string.' });
        }

        const newHabit = { id: this.currentId++, name: name.trim(), description: description?.trim() || '' };
        this.habits.push(newHabit);
        res.status(201).json(newHabit);
    }

    getHabits(req, res) {
        res.status(200).json(this.habits);
    }

    updateHabit(req, res) {
        const { id } = req.params;
        const { name, description } = req.body;
        const habit = this.habits.find(h => h.id === parseInt(id));

        if (!habit) {
            return res.status(404).json({ message: 'Habit not found' });
        }

        // Validation
        if (name !== undefined && (typeof name !== 'string' || name.trim().length === 0)) {
            return res.status(400).json({ message: 'Name must be a non-empty string.' });
        }
        if (description !== undefined && typeof description !== 'string') {
            return res.status(400).json({ message: 'Description must be a string.' });
        }

        habit.name = name !== undefined ? name.trim() : habit.name;
        habit.description = description !== undefined ? description.trim() : habit.description;
        res.status(200).json(habit);
    }

    deleteHabit(req, res) {
        const { id } = req.params;
        const habitIndex = this.habits.findIndex(h => h.id === parseInt(id));

        if (habitIndex === -1) {
            return res.status(404).json({ message: 'Habit not found' });
        }

        this.habits.splice(habitIndex, 1);
        res.status(204).send();
    }
}

export default HabitsController;