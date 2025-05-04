import { Routes, Route } from 'react-router-dom'
import './styles/index.css';
import Header from './components/Header';
import SiteRoute from './routes/siteRoute';

function App() {
  return (
    <div className='relative min-h-screen'>
      <Header />
      <SiteRoute />
    </div>
  )
}

export default App
