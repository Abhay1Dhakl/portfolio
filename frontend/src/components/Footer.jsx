import './Footer.css';

const Footer = ({ profile }) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="footer-logo">AD</div>
                        <p className="footer-tagline">
                            Building intelligent solutions with AI & Machine Learning
                        </p>
                    </div>

                    <div className="footer-links">
                        <div className="footer-section">
                            <h4 className="footer-title">Quick Links</h4>
                            <ul className="footer-list">
                                <li><a href="#home">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#experience">Experience</a></li>
                                <li><a href="#projects">Projects</a></li>
                            </ul>
                        </div>

                        <div className="footer-section">
                            <h4 className="footer-title">Connect</h4>
                            <ul className="footer-list">
                                <li><a href={`mailto:${profile?.email || 'abhaydhakal@gmail.com'}`}>Email</a></li>
                                <li><a href={profile?.github || '#'} target="_blank" rel="noopener noreferrer">GitHub</a></li>
                                <li><a href={`tel:${profile?.phone || '+9779849943616'}`}>Phone</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-copyright">
                        © {currentYear} {profile?.name || 'Abhaya Dhakal'}. All rights reserved.
                    </div>
                    <div className="footer-made-with">
                        Made with <span className="heart">❤️</span> using React & PostgreSQL
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
