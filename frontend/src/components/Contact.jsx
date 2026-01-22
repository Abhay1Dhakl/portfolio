import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { portfolioAPI } from '../services/api';
import './Contact.css';

const Contact = () => {
    const [ref, inView] = useInView({
        threshold: 0.3,
        triggerOnce: true,
    });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [status, setStatus] = useState({
        loading: false,
        success: false,
        error: null,
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, success: false, error: null });

        try {
            await portfolioAPI.sendMessage(formData);
            setStatus({ loading: false, success: true, error: null });
            setFormData({ name: '', email: '', subject: '', message: '' });

            setTimeout(() => {
                setStatus({ loading: false, success: false, error: null });
            }, 5000);
        } catch (error) {
            setStatus({
                loading: false,
                success: false,
                error: 'Failed to send message. Please try again.',
            });
        }
    };

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
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <section id="contact" className="section contact">
            <div className="container">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    <motion.div variants={itemVariants} className="section-header">
                        <h2 className="section-title">Get In Touch</h2>
                        <p className="section-subtitle">Let's work together on your next project</p>
                    </motion.div>

                    <div className="contact-content">
                        <motion.div variants={itemVariants} className="contact-info">
                            <h3 className="contact-info-title">Let's Connect</h3>
                            <p className="contact-info-text">
                                I'm always excited to discuss new projects, creative ideas, or opportunities to be part of your vision.
                            </p>

                            <div className="contact-methods">
                                <div className="contact-method">
                                    <div className="contact-method-icon">📧</div>
                                    <div className="contact-method-content">
                                        <div className="contact-method-label">Email</div>
                                        <div className="contact-method-value">abhaydhakal@gmail.com</div>
                                    </div>
                                </div>

                                <div className="contact-method">
                                    <div className="contact-method-icon">📱</div>
                                    <div className="contact-method-content">
                                        <div className="contact-method-label">Phone</div>
                                        <div className="contact-method-value">+977 984 994 3616</div>
                                    </div>
                                </div>

                                <div className="contact-method">
                                    <div className="contact-method-icon">📍</div>
                                    <div className="contact-method-content">
                                        <div className="contact-method-label">Location</div>
                                        <div className="contact-method-value">Kavrestihali, Kathmandu</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.form
                            variants={itemVariants}
                            onSubmit={handleSubmit}
                            className="contact-form card glass"
                        >
                            <div className="form-group">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                    placeholder="Your name"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="form-input"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject" className="form-label">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="form-input"
                                    placeholder="Project inquiry"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="form-input form-textarea"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status.loading}
                                className="btn btn-primary btn-submit"
                            >
                                {status.loading ? 'Sending...' : 'Send Message'}
                            </button>

                            {status.success && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="form-message form-success"
                                >
                                    ✓ Message sent successfully! I'll get back to you soon.
                                </motion.div>
                            )}

                            {status.error && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="form-message form-error"
                                >
                                    ✗ {status.error}
                                </motion.div>
                            )}
                        </motion.form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
