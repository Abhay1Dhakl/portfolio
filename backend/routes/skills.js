import express from 'express';
import pool from '../config/database.js';

const router = express.Router();

// Get all skills grouped by category
router.get('/', async (req, res) => {
    try {
        const result = await pool.query(
            'SELECT * FROM skills ORDER BY category, proficiency DESC'
        );

        // Group skills by category
        const skillsByCategory = result.rows.reduce((acc, skill) => {
            if (!acc[skill.category]) {
                acc[skill.category] = [];
            }
            acc[skill.category].push({
                id: skill.id,
                name: skill.skill_name,
                proficiency: skill.proficiency
            });
            return acc;
        }, {});

        res.json(skillsByCategory);
    } catch (error) {
        console.error('Error fetching skills:', error);
        res.status(500).json({ error: 'Failed to fetch skills' });
    }
});

export default router;
