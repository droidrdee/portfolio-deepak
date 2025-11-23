import React from 'react';
import Hero from './components/Hero';
import Socials from './components/Socials';
import ProfileImage from './components/ProfileImage';
import ProjectCard from './components/ProjectCard';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Services from './components/Services';
import Clients from './components/Clients';
import Testimonials from './components/Testimonials';
import Process from './components/Process';
import BookCall from './components/BookCall';

function App() {
  return (
    <div className="app-wrapper">
      <div className="bento-container">
        {/* Row 1: Intro */}
        <Hero />
        <Socials />
        <ProfileImage />

        {/* Row 2: Freelance Core */}
        <Services />
        <Clients />

        {/* Row 3: Social Proof & Process */}
        <Testimonials />
        <Process />

        {/* Row 4: Skills & Featured Project */}
        <Skills />
        <ProjectCard
          title="HealthSync"
          desc="AI-based Diet Recommendation System creating customized diet plans using adaptive machine learning models."
          tags={['Machine Learning', 'Python', 'AI']}
          image="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          delay={0.2}
        />

        {/* Row 5: More Projects & CTA */}
        <ProjectCard
          title="HeartSync"
          desc="Social & Dating App with interest-based matching and schedule-synced friend suggestions."
          tags={['React Native', 'Django', 'Mobile App']}
          image="https://images.unsplash.com/photo-1516321165247-4aa89a48be28?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          delay={0.3}
          colSpan={2}
        />
        <BookCall />

        {/* Row 6: Contact */}
        <Contact />
      </div>

      <footer className="simple-footer">
        <p>© {new Date().getFullYear()} Deepak Rathore. All rights reserved.</p>
      </footer>

      <style>{`
        .app-wrapper {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 40px 0;
        }
        .simple-footer {
          text-align: center;
          color: var(--text-muted);
          margin-top: 40px;
          font-size: 0.9rem;
        }
      `}</style>
    </div>
  );
}

export default App;
