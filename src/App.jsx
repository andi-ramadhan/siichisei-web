import { useState } from 'react';
import './styles/index.css';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Insight from './components/Insight';
import ServicesInsight from './components/ServicesInsight';
import Footer from './components/Footer';
import DiscordInsight from './components/DiscordInsight';

function App() {
  const [activeSection, setActiveSection] = useState('')

  const sectionChangeHandler = (section) => {
    if (section === activeSection) return;
    setActiveSection(section);
  }

  return (
    <div id="/"className='relative min-h-screen'>
      <Header
        activeSection={activeSection}
        setActiveSection={sectionChangeHandler}
      />
      <main className='w-full'>
        <Welcome />
        <Insight />
        <DiscordInsight />
        <ServicesInsight />
        <Footer />
      </main>
    </div>
  )
}

export default App
