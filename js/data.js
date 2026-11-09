/* All site content lives here. Add a project, universe, video or social link by adding one object. */
window.XYZ = {
  brand: 'XYZTECH',
  tagline: 'Building Ideas Into Reality.',
  location: 'Ibadan, Oyo State, Nigeria',
  email: 'balogunoladimejiazeez@gmail.com',
  whatsapp: '2348161199331',
  whatsappDisplay: '+234 816 119 9331',
  nav: [
    { label: 'Home', href: 'index.html' },
    { label: 'About', href: 'about.html' },
    { label: 'Services', href: 'services.html' },
    { label: 'Projects', href: 'projects.html' },
    { label: 'Universes', href: 'universes/index.html' },
    { label: 'Media', href: 'media.html' },
    { label: 'Contact', href: 'contact.html' }
  ],
  categories: [
    { id: 'all', label: 'All' }, { id: 'tech', label: 'Technology' }, { id: 'web', label: 'Websites' },
    { id: 'design', label: 'Graphic design' }, { id: 'creative', label: 'Creative' }, { id: 'media', label: 'Media' }
  ],
  /* image: path inside the site (e.g. 'assets/img/repair.jpg'), or '' for a placeholder */
  projects: [
    { title: 'Repair request platform', category: 'tech', featured: true, image: '',
      desc: 'A repair-request website built with Firebase that sends each new request to WhatsApp.',
      tags: 'Firebase, JavaScript, WhatsApp', href: 'services.html' },
    { title: 'Crow Angel Universe', category: 'creative', featured: true, image: '',
      desc: 'My primary original universe: Azrath, heroes, villains, civilizations and comic episodes.',
      tags: 'Comics, world-building', href: 'universes/crow-angel.html' },
    { title: 'Xyz TV', category: 'media', featured: true, image: '',
      desc: 'A tech and support TV brand with videos and featured content.',
      tags: 'Video, social media', href: 'media.html' }
  ],
  universes: [
    { slug: 'crow-angel', title: 'Crow Angel Universe', accent: 'var(--u-crow)', image: '', gallery: [],
      genre: 'Sci-fi fantasy, superhero action, dark fantasy',
      blurb: 'Azrath, also known as Crow Angel, and a universe of heroes, villains and Shadow Generals.',
      characters: ['Crow Angel', 'Night Fang', 'Wave', 'Mystra', 'Orion', 'Iron Shadow', 'Arcanix', 'Veylor', 'Elixor', 'Shadow Generals'] },
    { slug: 'guardians-of-balance', title: 'Guardians of Balance', accent: 'var(--u-guardians)', image: '', gallery: [],
      genre: 'Cosmic fantasy, superhero adventure',
      blurb: 'Mythes, a hero whose abilities come from alien scarabs, and the team around him.',
      characters: ['Mythes', 'Klaus', 'Astrael', 'Rynx', 'Tera Vox', 'Seren', 'Vorn', 'The Source'] },
    { slug: 'void-ascendant', title: 'The Void Ascendant', accent: 'var(--u-void)', image: '', gallery: [],
      genre: 'Supernatural science fantasy, urban manga',
      blurb: 'Tunde, the Void Ascendant, in an Ibadan shaped by ancestral echoes and cosmic entities.',
      characters: ['Tunde, the Void Ascendant'] }
  ],
  /* Confirm each URL before publishing. The YouTube link is a search until you add the channel URL. */
  socials: [
    { name: 'YouTube', handle: 'xyz tv0649', href: 'https://www.youtube.com/results?search_query=xyz+tv0649' },
    { name: 'TikTok', handle: '@xyztv0649', href: 'https://www.tiktok.com/@xyztv0649' },
    { name: 'Instagram', handle: '@xyztv0649', href: 'https://www.instagram.com/xyztv0649/' },
    { name: 'Facebook', handle: 'xyztvofficial', href: 'https://www.facebook.com/xyztvofficial' },
    { name: 'X', handle: '@xyztv0649', href: 'https://x.com/xyztv0649' }
  ],
  /* Add videos like { title: 'My video', youtubeId: 'dQw4w9WgXcQ' } */
  videos: []
};
