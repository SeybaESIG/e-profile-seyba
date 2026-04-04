import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import HomePage from './pages/HomePage.jsx';
import ProjectDetailPage from './pages/ProjectDetailPage.jsx';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
            </Routes>
        </Router>
    );
}

export default App;