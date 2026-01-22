import { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { portfolioAPI } from './services/api';

function App() {
    const [data, setData] = useState({
        profile: null,
        education: [],
        experience: [],
        projects: [],
        skills: {},
        certifications: [],
        loading: true,
        error: null
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [profile, education, experience, projects, skills, certifications] = await Promise.all([
                    portfolioAPI.getProfile(),
                    portfolioAPI.getEducation(),
                    portfolioAPI.getExperience(),
                    portfolioAPI.getProjects(),
                    portfolioAPI.getSkills(),
                    portfolioAPI.getCertifications(),
                ]);

                setData({
                    profile: profile.data,
                    education: education.data,
                    experience: experience.data,
                    projects: projects.data,
                    skills: skills.data,
                    certifications: certifications.data,
                    loading: false,
                    error: null
                });
            } catch (error) {
                console.error('Error fetching portfolio data:', error);
                setData(prev => ({
                    ...prev,
                    loading: false,
                    error: 'Failed to load portfolio data. Please try again later.'
                }));
            }
        };

        fetchData();
    }, []);

    if (data.loading) {
        return (
            <div className="loading">
                <div className="spinner"></div>
            </div>
        );
    }

    return (
        <Router>
            <div className="App">
                <Navbar />
                <Hero profile={data.profile} />
                <About profile={data.profile} education={data.education} />
                <Experience experience={data.experience} />
                <Projects projects={data.projects} />
                <Skills skills={data.skills} certifications={data.certifications} />
                <Contact />
                <Footer profile={data.profile} />
            </div>
        </Router>
    );
}

export default App;
