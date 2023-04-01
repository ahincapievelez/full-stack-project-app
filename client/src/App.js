import './App.css';
import { Navigate, Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import Dashboard from './pages/Dashboard'
import Leads from './pages/Leads'
import Lead from './pages/Lead'
import Contacts from './pages/Contacts'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Project from './pages/Project'
import Bids from './pages/Bids'
import Bid from './pages/Bid'

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/leads" element={<Leads />} />
        <Route path="/leads/:id" element={<Lead />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/contacts/:id" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<Project />} />
        <Route path="/bids" element={<Bids />} />
        <Route path="/bids/:id" element={<Bid />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

    </div>
  
  );
}

export default App;
