import express from 'express';
import pool from '../config/database.js';

const router = express.Router();

// Get profile
router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM profile LIMIT 1');
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Profile not found' });
        }
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error fetching profile:', error);
        res.status(500).json({ error: 'Failed to fetch profile' });
    }
});

export default router;
