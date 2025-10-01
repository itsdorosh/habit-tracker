const habitPlaceholders = [
    "Drink a glass of water",
    "Read 10 pages of a book",
    "Go for a walk",
    "Meditate for 5 minutes",
    "Write a journal entry",
    "Practice coding",
    "Stretch for 10 minutes",
    "Plan tomorrow's tasks",
    "Eat a healthy snack",
    "Review your goals"
];

export function generateTemplateHabit() {
    const randomIndex = Math.floor(Math.random() * habitPlaceholders.length);
    return habitPlaceholders[randomIndex];
}
