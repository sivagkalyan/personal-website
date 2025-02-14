import React from 'react';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';
import ThemeToggle from './components/ThemeToggle';
import ThreeDScene from './components/ThreeDScene';
import './styles/tailwind.css';

function App() {
  return (
    <div className="app-container">
      <ThemeToggle />
      <ThreeDScene />
      <div className="resume-builder">
        <ResumeForm />
        <ResumePreview />
      </div>
    </div>
  );
}

export default App; 