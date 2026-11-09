# XYZTECH website

Plain HTML, CSS and JavaScript. No build step and no paid services.

## Run it
Open `index.html` in a browser, or run `npx serve .` in this folder.

## Folders
- `css/tokens.css` colours, fonts, spacing (change the look here)
- `css/main.css` and `css/pages.css` components and page layouts
- `js/data.js` all content: projects, universes, characters, videos, social links
- `js/layout.js` shared header and footer; `js/main.js` and `js/pages.js` behaviour
- `universes/` one page per creative universe

## Update content (all in js/data.js)
- **New project:** add an object to `projects`. Set `category` to `tech`, `web`, `design`, `creative` or `media`, and `featured: true` to show it on the homepage.
- **Artwork or photos:** put images in `assets/img/` and set `image: 'assets/img/name.jpg'`. Universe `gallery` takes a list of paths. A character can be `{ name: 'Mythes', image: 'assets/img/mythes.jpg' }`.
- **Videos:** add `{ title: 'My video', youtubeId: 'VIDEO_ID' }` to `videos`.
- **New universe:** add an object to `universes`, then copy a file in `universes/` and change its title, text and `data-universe` value.
- **Profile photo:** replace the placeholder block in `about.html` with an `<img>`.

## Contact form
The form opens WhatsApp or your email app with the message filled in, so it needs no server. To receive messages without the visitor pressing send, you can later connect a free form service such as Netlify Forms.

## Confirm before publishing
- The YouTube link in `socials` is a search; replace it with your channel URL.
- Check the Facebook and other social URLs.
- Add your personal TikTok only after confirming the handle.

## Deploy
Any static host works: GitHub Pages, Netlify or Cloudflare Pages. Upload the folder contents so `index.html` is at the top level.
