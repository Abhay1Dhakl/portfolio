-- Portfolio Database Schema

-- Profile Table
CREATE TABLE IF NOT EXISTS profile (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    location VARCHAR(255),
    phone VARCHAR(50),
    email VARCHAR(255) NOT NULL,
    github VARCHAR(255),
    bio TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Education Table
CREATE TABLE IF NOT EXISTS education (
    id SERIAL PRIMARY KEY,
    institution VARCHAR(255) NOT NULL,
    degree VARCHAR(255) NOT NULL,
    location VARCHAR(255),
    university VARCHAR(255),
    start_date VARCHAR(50),
    end_date VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Experience Table
CREATE TABLE IF NOT EXISTS experience (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    company VARCHAR(255) NOT NULL,
    location VARCHAR(255),
    start_date VARCHAR(50),
    end_date VARCHAR(50),
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    sort_order INTEGER DEFAULT 0
);

-- Experience Details (Bullet Points)
CREATE TABLE IF NOT EXISTS experience_details (
    id SERIAL PRIMARY KEY,
    experience_id INTEGER REFERENCES experience(id) ON DELETE CASCADE,
    detail TEXT NOT NULL,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Projects Table
CREATE TABLE IF NOT EXISTS projects (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    technologies TEXT[],
    github_url VARCHAR(255),
    live_url VARCHAR(255),
    featured BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    sort_order INTEGER DEFAULT 0
);

-- Skills Table
CREATE TABLE IF NOT EXISTS skills (
    id SERIAL PRIMARY KEY,
    category VARCHAR(100) NOT NULL,
    skill_name VARCHAR(255) NOT NULL,
    proficiency INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Certifications Table
CREATE TABLE IF NOT EXISTS certifications (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    issuer VARCHAR(255),
    issued_date VARCHAR(50),
    credential_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Contact Messages Table
CREATE TABLE IF NOT EXISTS contact_messages (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(255),
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    read BOOLEAN DEFAULT false
);

-- Insert Abhaya's Profile Data
INSERT INTO profile (name, title, location, phone, email, github, bio) VALUES
('Abhaya Dhakal', 'AI/ML Engineer & Data Science Specialist', 'Kavrestihali, Kathmandu', '+9779849943616', 'abhaydhakal@gmail.com', 'https://github.com/abhaydhakal', 
'Enthusiastic and detail-oriented AI/ML enthusiast with a strong foundation in machine learning, data science, and backend development. Experienced in building recommendation systems, chatbots, and predictive models. Skilled in leveraging data to derive insights and build intelligent solutions, with hands-on projects involving NLP, SQL generation, and vector databases. Passionate about applying AI to solve real-world problems and eager to contribute to impactful, data-driven projects. Committed to continuous learning, research, and professional growth in the field of AI and machine learning.');

-- Insert Education
INSERT INTO education (institution, degree, location, university, start_date, end_date) VALUES
('Vedas College', 'Bachelor of Computer Application', 'Lalitpur, Nepal', 'Tribhuvan University, Nepal', '2020', '2025');

-- Insert Experience
INSERT INTO experience (title, company, location, start_date, end_date, description, sort_order) VALUES
('AI/ML Engineer (Team Lead)', 'Assabet Technologies', 'Remote', 'Aug 2025', 'Present', 'Leading AI/ML initiatives for healthcare and enterprise solutions', 1),
('Associate Data Scientist', 'Dlytica Pvt. Ltd.', 'Nepal', 'Aug 2024', 'Jul 2025', 'Developed ML-based systems and intelligent agents', 2);

-- Insert Experience Details for AI/ML Engineer
INSERT INTO experience_details (experience_id, detail, sort_order) VALUES
(1, 'Medical Information Retrieval System: An AI-powered healthcare platform built from scratch to enable intelligent document understanding and conversational data retrieval using NLP and LLMs.', 1),
(1, 'Improved query accuracy by 40% and reduced response latency by 35% through optimized vector search, caching, and fine-tuned LLM orchestration.', 2),
(1, 'Developed a unified Model Control Platform (MCP) for multi-model orchestration, dynamic routing, and versioned deployments across OpenAI, Claude, Gemini, and on-prem LLMs.', 3),
(1, 'Implemented scalable document management with MinIO and automated retraining workflows using Apache Airflow, increasing pipeline efficiency by 50%.', 4),
(1, 'Applied RLHF (DPO) for fine-tuning and integrated Helicone and Langfuse for observability, feedback tracking, and performance evaluation.', 5),
(1, 'Ensured HIPAA-compliant data handling and collaborated with cross-functional teams to deliver reliable, privacy-focused healthcare AI solutions.', 6);

-- Insert Experience Details for Associate Data Scientist
INSERT INTO experience_details (experience_id, detail, sort_order) VALUES
(2, 'Recommendation System: Developed ML-based recommendation models for banking data, improving targeting accuracy by 25% and product uptake by 15%.', 1),
(2, 'AI360Agent (SQL Agent): Built an intelligent SQL agent for natural language to SQL translation and real-time analytics; integrated MCP for multi-model orchestration and optimized query execution.', 2),
(2, 'Dlytica Academy Chatbot: Designed a RAG-based educational assistant leveraging LLMs to deliver contextual answers, improving response relevance by 35%.', 3),
(2, 'Built and managed ML pipelines using Kubeflow, with Trino for data extraction and MinIO for scalable storage, reducing data processing time by 40%.', 4),
(2, 'Containerized AI systems with Docker and deployed on Kubernetes, ensuring scalability, reliability, and streamlined iteration cycles.', 5);

-- Insert Projects
INSERT INTO projects (title, description, technologies, github_url, featured, sort_order) VALUES
('Federal Acquisition Regulation (FAR) AI Chatbot', 'Developed AI chatbot for regulatory compliance using Retrieval-Augmented Generation (RAG). Utilized vector databases and LLMs for accurate response generation.', 
ARRAY['Python', 'NLP', 'Vector Databases', 'Docker'], 'https://github.com/abhaydhakal', true, 1),

('Traffic Prediction for Popup Store (3-hour forecasting)', 'Built traffic prediction model for pop-up stores using time-series forecasting. Implemented feature engineering and model optimization for real-time predictions.', 
ARRAY['Python', 'Scikit-learn', 'Time-series Analysis'], 'https://github.com/abhaydhakal', true, 2),

('Tour and Travels Management System', 'Full-stack development of tour management system with ReactJS frontend and Django backend. Implemented agile methodology with unit and system testing.', 
ARRAY['ReactJS', 'Django', 'PostgreSQL', 'REST API'], 'https://github.com/abhaydhakal', false, 3),

('Recommendation System Integration', 'Integrated collaborative filtering recommendation system into tourism management platform.', 
ARRAY['Python', 'Machine Learning', 'Django'], 'https://github.com/abhaydhakal', false, 4);

-- Insert Skills
INSERT INTO skills (category, skill_name, proficiency) VALUES
-- Programming Languages
('Programming Languages', 'Python', 95),
('Programming Languages', 'SQL', 90),
('Programming Languages', 'Java', 80),
('Programming Languages', 'JavaScript', 85),
('Programming Languages', 'C', 75),
('Programming Languages', 'PHP', 70),

-- Machine Learning & AI
('Machine Learning & AI', 'Supervised Learning', 90),
('Machine Learning & AI', 'Unsupervised Learning', 85),
('Machine Learning & AI', 'Deep Learning', 88),
('Machine Learning & AI', 'NLP', 92),
('Machine Learning & AI', 'Recommendation Systems', 90),
('Machine Learning & AI', 'Model Optimization', 85),
('Machine Learning & AI', 'Time-Series Forecasting', 80),

-- Data Science
('Data Science', 'Data Preprocessing', 90),
('Data Science', 'Feature Engineering', 88),
('Data Science', 'Statistical Analysis', 85),
('Data Science', 'A/B Testing', 80),

-- Databases
('Databases', 'PostgreSQL', 90),
('Databases', 'MySQL', 85),
('Databases', 'MinIO', 80),
('Databases', 'Vector Databases', 85),
('Databases', 'Apache Trino', 75),
('Databases', 'Iceberg', 70),

-- MLOps & Cloud
('MLOps & Cloud', 'Docker', 90),
('MLOps & Cloud', 'Kubernetes', 85),
('MLOps & Cloud', 'Kubeflow', 80),
('MLOps & Cloud', 'KServe', 75),
('MLOps & Cloud', 'FastAPI', 88),
('MLOps & Cloud', 'CI/CD', 85),

-- Frameworks
('Frameworks', 'TensorFlow', 85),
('Frameworks', 'PyTorch', 85),
('Frameworks', 'Scikit-learn', 90),
('Frameworks', 'Pandas', 92),
('Frameworks', 'NumPy', 90),
('Frameworks', 'Matplotlib', 85),

-- Web Technologies
('Web Technologies', 'Django', 88),
('Web Technologies', 'React.js', 85),
('Web Technologies', 'Vue.js', 80),
('Web Technologies', 'Laravel', 75),
('Web Technologies', 'REST APIs', 90),

-- Tools
('Tools', 'Git', 92),
('Tools', 'Apache Superset', 75),
('Tools', 'Ollama', 80),
('Tools', 'Vaana.ai', 70);

-- Insert Certifications
INSERT INTO certifications (name, issuer, issued_date, credential_url) VALUES
('Supervised Machine Learning', 'Coursera', '2023', '#'),
('Advanced Learning Algorithms', 'Coursera', '2023', '#'),
('Python Fundamentals', 'Coursera', '2022', '#');

-- Create indexes for better performance
CREATE INDEX idx_experience_sort ON experience(sort_order);
CREATE INDEX idx_projects_featured ON projects(featured);
CREATE INDEX idx_projects_sort ON projects(sort_order);
CREATE INDEX idx_skills_category ON skills(category);
CREATE INDEX idx_contact_messages_created ON contact_messages(created_at DESC);
