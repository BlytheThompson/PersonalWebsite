// script.js

// Example function to add a project dynamically
function addProject(title, description) {
    const projectsSection = document.getElementById('projects');
  
    const projectElement = document.createElement('div');
    projectElement.classList.add('project');
  
    const titleElement = document.createElement('h3');
    titleElement.textContent = title;
  
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = description;
  
    projectElement.appendChild(titleElement);
    projectElement.appendChild(descriptionElement);
  
    projectsSection.appendChild(projectElement);
  }
  
  // Example usage
  addProject('Project 1', 'This is an example project.');
  addProject('Project 2', 'This is another example // script.js');
  