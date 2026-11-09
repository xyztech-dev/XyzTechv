/* Shared renderers (reused by the Projects and Universes pages) and homepage behaviour */
(() => {
  const D = window.XYZ;
  const root = document.body.dataset.root || '';

  const art = (image, label) => image
    ? `<div class="art"><img src="${root}${image}" alt="${label}" loading="lazy"></div>`
    : `<div class="art" role="img" aria-label="Artwork placeholder for ${label}">Artwork coming soon</div>`;

  window.renderProjects = (target, list) => {
    target.innerHTML = list.map(p => `
      <a class="card" href="${root}${p.href}" data-category="${p.category}">
        ${art(p.image, p.title)}
        <div class="card-body">
          <span class="tag">${p.tags}</span>
          <h3>${p.title}</h3>
          <p>${p.desc}</p>
        </div>
      </a>`).join('');
  };

  window.renderUniverses = (target, list) => {
    target.innerHTML = list.map(u => `
      <a class="card universe" href="${root}universes/${u.slug}.html" style="--accent:${u.accent}">
        ${art(u.image, u.title)}
        <div class="card-body">
          <span class="tag">${u.genre}</span>
          <h3>${u.title}</h3>
          <p>${u.blurb}</p>
        </div>
      </a>`).join('');
  };

  const featured = document.getElementById('featured');
  if (featured) window.renderProjects(featured, D.projects.filter(p => p.featured));

  const universes = document.getElementById('universeCards');
  if (universes) window.renderUniverses(universes, D.universes);

  /* Homepage pillars: the hovered or focused panel opens (all open on mobile via CSS) */
  const pillars = document.querySelectorAll('.pillar');
  const open = el => pillars.forEach(p => p.classList.toggle('on', p === el));
  pillars.forEach(p => {
    p.addEventListener('mouseenter', () => open(p));
    p.addEventListener('focusin', () => open(p));
  });
})();
