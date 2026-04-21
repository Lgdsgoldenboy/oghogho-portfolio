import React from 'react';
import Cursor from './components/Cursor';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import WorkSection from './components/WorkSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import QualificationsSection from './components/QualificationsSection';
import WritingSection from './components/WritingSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => (
  <>
    <Cursor />
    <Nav />
    <Hero />
    <Ticker />
    <WorkSection />
    <AboutSection />
    <SkillsSection />
    <ExperienceSection />
    <QualificationsSection />
    <WritingSection />
    <ContactSection />
    <Footer />
  </>
);

export default App;