import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';

const About = ({ profile, education }) => {
    const [ref, inView] = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
            },
        },
    };

    if (!profile) return null;

    return (
        <section id="about" className="section about">
            <div className="container">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    <motion.div variants={itemVariants} className="section-header">
                        <h2 className="section-title">About Me</h2>
                        <p className="section-subtitle">Get to know more about my background</p>
                    </motion.div>

                    <div className="about-grid">
                        <motion.div variants={itemVariants} className="about-content">
                            <div className="about-text">
                                <p>{profile.bio}</p>
                            </div>

                            <div className="about-info">
                                <div className="about-info-item">
                                    <div className="about-info-icon">📍</div>
                                    <div>
                                        <div className="about-info-label">Location</div>
                                        <div className="about-info-value">{profile.location}</div>
                                    </div>
                                </div>

                                <div className="about-info-item">
                                    <div className="about-info-icon">📧</div>
                                    <div>
                                        <div className="about-info-label">Email</div>
                                        <div className="about-info-value">{profile.email}</div>
                                    </div>
                                </div>

                                <div className="about-info-item">
                                    <div className="about-info-icon">📱</div>
                                    <div>
                                        <div className="about-info-label">Phone</div>
                                        <div className="about-info-value">{profile.phone}</div>
                                    </div>
                                </div>

                                {profile.github && (
                                    <div className="about-info-item">
                                        <div className="about-info-icon">💻</div>
                                        <div>
                                            <div className="about-info-label">GitHub</div>
                                            <div className="about-info-value">
                                                <a href={profile.github} target="_blank" rel="noopener noreferrer">
                                                    View Profile
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="about-education">
                            <h3 className="about-section-title">Education</h3>
                            {education && education.map((edu, index) => (
                                <div key={index} className="education-card card">
                                    <div className="education-timeline">
                                        <div className="education-timeline-dot"></div>
                                        <div className="education-timeline-line"></div>
                                    </div>
                                    <div className="education-content">
                                        <div className="education-period">
                                            {edu.start_date} - {edu.end_date}
                                        </div>
                                        <h4 className="education-degree">{edu.degree}</h4>
                                        <div className="education-institution">{edu.institution}</div>
                                        <div className="education-location">{edu.location}</div>
                                        {edu.university && (
                                            <div className="education-university">{edu.university}</div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
