/* Behaviour for inner pages: filters, universes, media, services and contact form */
(() => {
  const D = window.XYZ;
  const root = document.body.dataset.root || '';
  const $ = id => document.getElementById(id);
  const wa = text => `https://wa.me/${D.whatsapp}?text=${encodeURIComponent(text)}`;
  const ph = label => `<div class="art" role="img" aria-label="Artwork placeholder for ${label}">Artwork coming soon</div>`;

  document.querySelectorAll('[data-service]').forEach(a => {
    a.href = wa(`Hello XYZTECH! I'd like to ask about: ${a.dataset.service}.`);
    a.target = '_blank'; a.rel = 'noopener';
  });

  /* Projects page filter */
  const filters = $('filters'), list = $('projectList');
  if (filters && list) {
    filters.innerHTML = D.categories.map((c, i) =>
      `<button type="button" class="${i ? '' : 'on'}" data-f="${c.id}" aria-pressed="${!i}">${c.label}</button>`).join('');
    const show = id => {
      const items = id === 'all' ? D.projects : D.projects.filter(p => p.category === id);
      if (items.length) window.renderProjects(list, items);
      else list.innerHTML = '<p class="empty">Nothing in this category yet. New work appears here as it is finished.</p>';
    };
    show('all');
    filters.addEventListener('click', e => {
      const b = e.target.closest('button'); if (!b) return;
      filters.querySelectorAll('button').forEach(x => { x.classList.toggle('on', x === b); x.setAttribute('aria-pressed', x === b); });
      show(b.dataset.f);
    });
  }

  /* Universes index */
  if ($('allUniverses')) window.renderUniverses($('allUniverses'), D.universes);

  /* Single universe page */
  const slug = document.body.dataset.universe;
  if (slug) {
    const u = D.universes.find(x => x.slug === slug);
    $('chars').innerHTML = u.characters.map(c => {
      const ch = typeof c === 'string' ? { name: c } : c;
      return `<li class="char">${ch.image ? `<div class="art"><img src="${root}${ch.image}" alt="${ch.name}" loading="lazy"></div>` : ph(ch.name)}<h3>${ch.name}</h3></li>`;
    }).join('');
    $('gallery').innerHTML = u.gallery.length
      ? u.gallery.map(g => `<div class="art"><img src="${root}${g}" alt="${u.title} artwork" loading="lazy"></div>`).join('')
      : [1, 2, 3].map(() => ph(u.title)).join('');
    window.renderUniverses($('others'), D.universes.filter(x => x.slug !== slug));
  }

  /* Media page */
  if ($('socials')) {
    $('socials').innerHTML = D.socials.map(s =>
      `<a href="${s.href}" target="_blank" rel="noopener"><b>${s.name}</b><span>${s.handle}</span></a>`).join('');
    $('videos').innerHTML = D.videos.length
      ? D.videos.map(v => `<iframe src="https://www.youtube-nocookie.com/embed/${v.youtubeId}" title="${v.title}" loading="lazy" allowfullscreen></iframe>`).join('')
      : [1, 2, 3].map(() => ph('Xyz TV video')).join('').replace(/Artwork coming soon/g, 'Video coming soon');
  }

  /* Contact form: opens WhatsApp or email with the details filled in (no paid service needed) */
  const form = $('contactForm');
  if (form) {
    const msg = () => {
      const v = id => $(id).value.trim();
      return `Hello XYZTECH!\n\nName: ${v('cName')}\nContact: ${v('cContact')}\nService: ${v('cService')}\n\n${v('cMessage')}`;
    };
    form.addEventListener('submit', e => {
      e.preventDefault();
      window.open(wa(msg()), '_blank', 'noopener');
    });
    $('emailBtn').addEventListener('click', () => {
      if (!form.reportValidity()) return;
      location.href = `mailto:${D.email}?subject=${encodeURIComponent('Enquiry: ' + $('cService').value)}&body=${encodeURIComponent(msg())}`;
    });
  }
})();
