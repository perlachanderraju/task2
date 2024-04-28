const express = require('express');
const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
app.post('/calculate', (req, res) => {
    const { principal, rate, time } = req.body;
    if (!principal || !rate || !time) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    const interest = (principal * rate * time) / 100;
    res.json({ interest });
});
if (isNaN(principal) || isNaN(rate) || isNaN(time) || principal < 0 || rate < 0 || time < 0) {
    return res.status(400).json({ error: 'Invalid input values' });
}