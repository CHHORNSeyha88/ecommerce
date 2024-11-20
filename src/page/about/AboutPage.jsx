import React from "react";

function AboutPage() {
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>About Me</h1>
            <p style={styles.paragraph}>
                Hello! I'm a passionate backend developer with extensive experience in building 
                scalable, efficient, and reliable applications using Java and Spring Boot. I enjoy solving 
                complex problems and working with cutting-edge technologies to create innovative solutions.
            </p>
            <h2 style={styles.subheading}>Skills & Technologies</h2>
            <ul style={styles.list}>
                <li>Java (Core & Advanced)</li>
                <li>Spring Boot (REST APIs, Microservices)</li>
                <li>JPA & Hibernate</li>
                <li>SQL (MySQL, PostgreSQL)</li>
                <li>Version Control (Git)</li>
                <li>Docker & Kubernetes (for containerization and orchestration)</li>
                <li>CI/CD (Jenkins, GitHub Actions)</li>
                <li>Test-Driven Development (JUnit, Mockito)</li>
            </ul>
            <h2 style={styles.subheading}>Experience</h2>
            <p style={styles.paragraph}>
                Over the last few years, I've worked on numerous backend projects, including developing 
                RESTful services, working with databases, and integrating third-party services. My expertise 
                lies in building robust, maintainable, and performant backend systems. I'm always eager to 
                learn new technologies and improve my skills.
            </p>
            <h2 style={styles.subheading}>Let's Connect!</h2>
            <p style={styles.paragraph}>
                If you're interested in collaborating or have any questions, feel free to reach out!
                I'm always open to new opportunities and challenges.
            </p>
        </div>
    );
}

// Inline styles for a clean and professional look
const styles = {
    container: {
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f9f9f9',
        maxWidth: '800px',
        margin: '0 auto',
    },
    heading: {
        textAlign: 'center',
        color: '#2c3e50',
    },
    subheading: {
        color: '#34495e',
        marginTop: '20px',
    },
    paragraph: {
        color: '#7f8c8d',
        lineHeight: '1.6',
    },
    list: {
        color: '#7f8c8d',
        listStyleType: 'none',
        paddingLeft: '0',
    }
};

export default AboutPage;
