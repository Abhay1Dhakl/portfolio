import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Skills.css';

const Skills = ({ skills, certifications }) => {
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
            },
        },
    };

    if (!skills || Object.keys(skills).length === 0) return null;

    return (
        <section id="skills" className="section skills bg-mesh">
            <div className="container">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    <motion.div variants={itemVariants} className="section-header">
                        <h2 className="section-title">Skills & Expertise</h2>
                        <p className="section-subtitle">Technologies I work with</p>
                    </motion.div>

                    <div className="skills-categories">
                        {Object.entries(skills).map(([category, categorySkills], index) => (
                            <motion.div
                                key={category}
                                variants={itemVariants}
                                className="skill-category card"
                            >
                                <h3 className="skill-category-title">{category}</h3>
                                <div className="skill-list">
                                    {categorySkills.map((skill, idx) => (
                                        <div key={skill.id} className="skill-item">
                                            <div className="skill-info">
                                                <span className="skill-name">{skill.name}</span>
                                                <span className="skill-percentage">{skill.proficiency}%</span>
                                            </div>
                                            <div className="skill-bar-container">
                                                <motion.div
                                                    className="skill-bar"
                                                    initial={{ width: 0 }}
                                                    animate={inView ? { width: `${skill.proficiency}%` } : { width: 0 }}
                                                    transition={{
                                                        duration: 1,
                                                        delay: index * 0.1 + idx * 0.05,
                                                        ease: 'easeOut',
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {certifications && certifications.length > 0 && (
                        <motion.div variants={itemVariants} className="certifications">
                            <h3 className="certifications-title">Certifications</h3>
                            <div className="certifications-grid grid grid-3">
                                {certifications.map((cert) => (
                                    <div key={cert.id} className="certification-card card">
                                        <div className="certification-icon">🎓</div>
                                        <h4 className="certification-name">{cert.name}</h4>
                                        {cert.issuer && (
                                            <div className="certification-issuer">{cert.issuer}</div>
                                        )}
                                        {cert.issued_date && (
                                            <div className="certification-date">{cert.issued_date}</div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
