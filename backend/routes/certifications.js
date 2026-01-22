import express from 'express';
import pool from '../config/database.js';

const router = express.Router();

// Get all certifications
router.get('/', async (req, res) => {
    try {
        const result = await pool.query(
            'SELECT * FROM certifications ORDER BY issued_date DESC'
        );
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching certifications:', error);
        res.status(500).json({ error: 'Failed to fetch certifications' });
    }
});

export default router;
