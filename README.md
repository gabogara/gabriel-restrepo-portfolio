# Gabriel Restrepo Acosta — Personal Portfolio

![Personal Portfolio](https://i.imgur.com/WJhvP6k.png)

I built this portfolio to share my journey into software engineering and to share the projects I’ve worked on, the skills I’ve developed, and the problems I enjoy solving. It represents not just my technical work, but the persistence and curiosity that drive me to keep growing.

---

## Live Demo

- **Live App:** ([Netlify](https://earnest-boba-4c6571.netlify.app/projects))

---

## Features

- **Home** — Hero section with a short bio and call-to-action buttons (Projects, Contact, Resume)
- **About** — Profile photo, extended bio, and a categorized skills grid rendered dynamically from a data file
- **Projects** — Some of the projects I have been working on recently listing sourced from a central data file with tags/pills
- **Contact** — Quick-access email and LinkedIn links
- **404 Page** — Custom not-found route

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | React 18 |
| Build Tool | Vite |
| Routing | React Router v6 |
| Styling | Plain CSS |

---

## Project Structure

```
src/
├── assets/
├── components/
│   ├── Footer.css / Footer.jsx
│   ├── Navbar.css / Navbar.jsx
│   ├── ProjectCard.css / ProjectCard.jsx
│   └── SectionHeader.jsx
├── data/
│   ├── projects.js
│   ├── skills.js
│   └── socials.js
├── layouts/
│   └── RootLayout.jsx
├── pages/
│   ├── AboutPage.jsx
│   ├── ContactPage.jsx
│   ├── HomePage.jsx
│   ├── NotFoundPage.jsx
│   └── ProjectsPage.jsx
├── App.css
├── App.jsx
├── index.css
└── main.jsx
```

---

## Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/gabogara/gabriel-restrepo-portfolio.git
cd gabriel-restrepo-portfolio
# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

---

## Customization

All content is data-driven and easy to update:

- **Projects** → `src/data/projects.js`
- **Skills** → `src/data/skills.js`
- **Social links** → `src/data/socials.js`

---

## Contact

- **Email:** [gabriel.acosta.rest@gmail.com](mailto:gabriel.acosta.rest@gmail.com)
- **LinkedIn:** [in/gabriel-restrepo-acosta](https://www.linkedin.com/in/gabriel-restrepo-acosta/)

