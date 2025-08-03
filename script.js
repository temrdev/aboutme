document.addEventListener('DOMContentLoaded', () => {
  const toggleSkillsBtn = document.getElementById('toggle-skills');
  const toggleProjectsBtn = document.getElementById('toggle-projects');
  const skillsList = document.getElementById('skills-list');
  const projectsList = document.getElementById('projects-list');
  const skillsArrow = toggleSkillsBtn.querySelector('.arrow');
  const projectsArrow = toggleProjectsBtn.querySelector('.arrow');

  toggleSkillsBtn.addEventListener('click', () => {
    const isExpanded = skillsList.classList.toggle('expanded');
    toggleSkillsBtn.classList.toggle('open');
    toggleSkillsBtn.setAttribute('aria-expanded', isExpanded);
  });

  toggleProjectsBtn.addEventListener('click', () => {
    const isExpanded = projectsList.classList.toggle('expanded');
    toggleProjectsBtn.classList.toggle('open');
    toggleProjectsBtn.setAttribute('aria-expanded', isExpanded);
  });
});

