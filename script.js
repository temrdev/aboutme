document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('toggle-skills');
  const skillsList = document.getElementById('skills-list');
  const arrow = toggleBtn.querySelector('.arrow');
  const text = toggleBtn.querySelector('.text');

  toggleBtn.addEventListener('click', () => {
    const isExpanded = skillsList.classList.toggle('expanded');
    toggleBtn.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', isExpanded);

    text.textContent = isExpanded ? 'Hide Skills' : 'Show Skills';
    // Иконка остаётся "expand_more", мы просто вращаем её через CSS
  });
});
