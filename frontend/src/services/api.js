import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || '/api';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const portfolioAPI = {
    // Profile
    getProfile: () => api.get('/profile'),

    // Education
    getEducation: () => api.get('/education'),

    // Experience
    getExperience: () => api.get('/experience'),

    // Projects
    getProjects: () => api.get('/projects'),
    getFeaturedProjects: () => api.get('/projects/featured'),

    // Skills
    getSkills: () => api.get('/skills'),

    // Certifications
    getCertifications: () => api.get('/certifications'),

    // Contact
    sendMessage: (data) => api.post('/contact', data),
};

export default api;
