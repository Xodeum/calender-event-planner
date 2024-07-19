const express = require('express');
const router = express.Router();

// Mock data - Replace this with actual data from your database
const events = [
    { title: 'Event 1', date: '2024-07-20', time: '10:00 AM' },
    { title: 'Event 2', date: '2024-07-21', time: '2:00 PM' }
];

router.get('/', (req, res) => {
    res.render('index', { events: events }); // Pass events to the view
});

module.exports = router;
