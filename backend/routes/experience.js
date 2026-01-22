import express from 'express';
import pool from '../config/database.js';

const router = express.Router();

// Get all experience with details
router.get('/', async (req, res) => {
    try {
        const experienceResult = await pool.query(
            'SELECT * FROM experience ORDER BY sort_order ASC'
        );

        const experiences = await Promise.all(
            experienceResult.rows.map(async (exp) => {
                const detailsResult = await pool.query(
                    'SELECT detail FROM experience_details WHERE experience_id = $1 ORDER BY sort_order ASC',
                    [exp.id]
                );
                return {
                    ...exp,
                    details: detailsResult.rows.map(d => d.detail)
                };
            })
        );

        res.json(experiences);
    } catch (error) {
        console.error('Error fetching experience:', error);
        res.status(500).json({ error: 'Failed to fetch experience' });
    }
});

export default router;
