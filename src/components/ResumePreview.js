import React from 'react';

function ResumePreview() {
  // Assume resumeData is fetched from a global state or context
  const resumeData = {}; // Placeholder

  return (
    <div className="resume-preview">
      <h1>{resumeData.name || 'Your Name'}</h1>
      <h2>{resumeData.jobTitle || 'Your Job Title'}</h2>
      {/* Render more resume details */}
    </div>
  );
}

export default ResumePreview; 