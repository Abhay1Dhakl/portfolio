import { motion } from 'framer-motion';
import './Hero.css';

const Hero = ({ profile }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.6, -0.05, 0.01, 0.99],
            },
        },
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    if (!profile) return null;

    return (
        <section id="home" className="hero section-hero bg-mesh">
            <div className="hero-particles"></div>

            <motion.div
                className="container hero-content"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div className="hero-tag" variants={itemVariants}>
                    <span className="hero-tag-icon">👋</span>
                    <span>Welcome to my portfolio</span>
                </motion.div>

                <motion.h1 className="hero-title" variants={itemVariants}>
                    Hi, I'm <span className="text-gradient">{profile.name}</span>
                </motion.h1>

                <motion.h2 className="hero-subtitle" variants={itemVariants}>
                    {profile.title}
                </motion.h2>

                <motion.p className="hero-description" variants={itemVariants}>
                    {profile.bio.substring(0, 200)}...
                </motion.p>

                <motion.div className="hero-cta" variants={itemVariants}>
                    <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
                        <span>View My Work</span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
                        <span>Get In Touch</span>
                    </button>
                </motion.div>

                <motion.div className="hero-stats" variants={itemVariants}>
                    <div className="hero-stat">
                        <div className="hero-stat-number">2+</div>
                        <div className="hero-stat-label">Years Experience</div>
                    </div>
                    <div className="hero-stat">
                        <div className="hero-stat-number">10+</div>
                        <div className="hero-stat-label">Projects Completed</div>
                    </div>
                    <div className="hero-stat">
                        <div className="hero-stat-number">5+</div>
                        <div className="hero-stat-label">Technologies</div>
                    </div>
                </motion.div>
            </motion.div>

            <motion.div
                className="hero-scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
            >
                <div className="hero-scroll-line"></div>
                <div className="hero-scroll-text">Scroll to explore</div>
            </motion.div>
        </section>
    );
};

export default Hero;
