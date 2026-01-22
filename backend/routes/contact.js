import express from 'express';
import pool from '../config/database.js';

const router = express.Router();

// Submit contact message
router.post('/', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        // Validation
        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Name, email, and message are required' });
        }

        const result = await pool.query(
            'INSERT INTO contact_messages (name, email, subject, message) VALUES ($1, $2, $3, $4) RETURNING *',
            [name, email, subject || 'No Subject', message]
        );

        res.status(201).json({
            message: 'Message sent successfully',
            data: result.rows[0]
        });
    } catch (error) {
        console.error('Error submitting contact message:', error);
        res.status(500).json({ error: 'Failed to submit message' });
    }
});

export default router;
