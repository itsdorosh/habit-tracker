const express = require('express');
const bodyParser = require('body-parser');
const { setHabitRoutes } = require('./habits/habitsRoutes');
const db = require('./utils/db');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to the database
db.connect();

// Set up routes
setHabitRoutes(app);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});