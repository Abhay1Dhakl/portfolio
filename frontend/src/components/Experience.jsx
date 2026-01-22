import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Experience.css';

const Experience = ({ experience }) => {
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
            },
        },
    };

    if (!experience || experience.length === 0) return null;

    return (
        <section id="experience" className="section experience bg-mesh">
            <div className="container">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    <motion.div variants={itemVariants} className="section-header">
                        <h2 className="section-title">Experience</h2>
                        <p className="section-subtitle">My professional journey</p>
                    </motion.div>

                    <div className="experience-timeline">
                        {experience.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                variants={itemVariants}
                                className="experience-item"
                            >
                                <div className="experience-timeline-marker">
                                    <div className="experience-timeline-dot"></div>
                                    {index !== experience.length - 1 && (
                                        <div className="experience-timeline-line"></div>
                                    )}
                                </div>

                                <div className="experience-card card glass">
                                    <div className="experience-header">
                                        <div>
                                            <h3 className="experience-title">{exp.title}</h3>
                                            <div className="experience-company">{exp.company}</div>
                                        </div>
                                        <div className="experience-period">
                                            {exp.start_date} - {exp.end_date}
                                        </div>
                                    </div>

                                    {exp.description && (
                                        <p className="experience-description">{exp.description}</p>
                                    )}

                                    {exp.details && exp.details.length > 0 && (
                                        <ul className="experience-details">
                                            {exp.details.map((detail, idx) => (
                                                <li key={idx}>{detail}</li>
                                            ))}
                                        </ul>
                                    )}

                                    {exp.location && (
                                        <div className="experience-location">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                                <path d="M8 0C5.2 0 3 2.2 3 5c0 3.5 5 11 5 11s5-7.5 5-11c0-2.8-2.2-5-5-5zm0 7.5c-1.4 0-2.5-1.1-2.5-2.5S6.6 2.5 8 2.5s2.5 1.1 2.5 2.5S9.4 7.5 8 7.5z" />
                                            </svg>
                                            {exp.location}
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
