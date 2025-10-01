class HabitsController {
    constructor() {
        this.habits = [];
        this.currentId = 1;
    }

    createHabit(req, res) {
        const { name, description } = req.body;
        const newHabit = { id: this.currentId++, name, description };
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

        habit.name = name || habit.name;
        habit.description = description || habit.description;
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