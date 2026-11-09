/* Injects the shared header and footer on every page. Pages in subfolders set <body data-root="../"> */
(() => {
  const D = window.XYZ;
  const root = document.body.dataset.root || '';

  const isCurrent = href => {
    const file = href.split('/').pop();
    const sub = href.includes('/') ? href.split('/')[0] : '';
    const path = location.pathname.replace(/\/$/, '/index.html');
    return sub ? path.includes('/' + sub + '/') : (path.endsWith('/' + file) && !path.includes('/universes/'));
  };

  const links = D.nav.map(n =>
    `<a href="${root}${n.href}"${isCurrent(n.href) ? ' aria-current="page"' : ''}>${n.label}</a>`
  ).join('');

  const header = document.getElementById('site-header');
  if (header) {
    header.className = 'site-header';
    header.innerHTML = `
      <div class="wrap bar">
        <a class="brand" href="${root}index.html" aria-label="XYZTECH home"><i></i>${D.brand}</a>
        <nav class="nav" id="nav" aria-label="Main">${links}</nav>
        <button class="menu" id="menuBtn" aria-expanded="false" aria-controls="nav" aria-label="Open menu"><span></span><span></span></button>
      </div>`;
    const btn = document.getElementById('menuBtn');
    const nav = document.getElementById('nav');
    const set = open => {
      nav.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', open);
      btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    };
    btn.addEventListener('click', () => set(!nav.classList.contains('open')));
    nav.addEventListener('click', e => { if (e.target.closest('a')) set(false); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') set(false); });
  }

  const footer = document.getElementById('site-footer');
  if (footer) {
    footer.className = 'site-footer';
    footer.innerHTML = `
      <div class="wrap">
        <div class="foot">
          <div>
            <a class="brand" href="${root}index.html"><i></i>${D.brand}</a>
            <p>${D.tagline}</p>
          </div>
          <div><h4>Pages</h4>${links}</div>
          <div>
            <h4>Contact</h4>
            <a href="https://wa.me/${D.whatsapp}" target="_blank" rel="noopener">WhatsApp ${D.whatsappDisplay}</a>
            <a href="mailto:${D.email}">${D.email}</a>
            <a>${D.location}</a>
          </div>
        </div>
        <p class="legal">&copy; ${new Date().getFullYear()} XYZTECH. All rights reserved.</p>
      </div>`;
  }
})();
