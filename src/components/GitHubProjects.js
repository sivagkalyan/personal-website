import React, { useEffect, useState } from 'react';
import axios from 'axios';

function GitHubProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/YOUR_GITHUB_USERNAME/repos');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching GitHub projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="github-projects">
      <h3>GitHub Projects</h3>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <a href={project.html_url} target="_blank" rel="noopener noreferrer">
              {project.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GitHubProjects; 