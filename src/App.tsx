import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ApplicationForm from './pages/ApplicationForm/ApplicationForm';
import ApplicationComplete from './pages/ApplicationComplete/ApplicationComplete';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apply" element={<ApplicationForm />} />
        <Route path="/complete" element={<ApplicationComplete />} />
      </Routes>
    </Router>
  );
};

export default App;