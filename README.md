# 🍷 Cava Zaragoza — Landing Page

Landing page for **Cava Zaragoza**, a boutique winery in Valle de Guadalupe, Baja California, México. Built with [Astro](https://astro.build) and [Tailwind CSS v4](https://tailwindcss.com).

🔗 **[cavazaragoza.com.mx](https://cavazaragoza.com.mx)**

---

## Tech Stack

| Layer     | Technology                       |
| :-------- | :------------------------------- |
| Framework | Astro 5                          |
| Styling   | Tailwind CSS 4 (Vite plugin)     |
| Icons     | Lucide (Astro integration)       |
| Images    | Sharp (Astro image optimization) |
| Fonts     | Playfair Display · Work Sans     |

## Project Structure

```text
src/
├── assets/          # Optimized images (processed by Astro)
├── components/      # Astro UI components
│   ├── Navbar.astro
│   ├── HeroSection.astro
│   ├── FeaturedWinesSection.astro
│   ├── CredibilitySection.astro
│   ├── HistorySection.astro
│   ├── ContactSection.astro
│   ├── ReservationSection.astro
│   ├── SubscriptionSection.astro
│   └── Footer.astro
├── layouts/
│   └── Layout.astro  # Base HTML layout with SEO & Schema.org
├── lib/
│   ├── contact.ts     # Centralized contact info
│   └── navigation.ts  # Shared nav link definitions
├── pages/
│   ├── index.astro     # Inicio (Home)
│   ├── historia.astro  # Historia (History)
│   ├── vinos.astro     # Nuestros Vinos (Wines catalog)
│   ├── contacto.astro  # Contacto (Contact)
│   └── reservar.astro  # Reservar (Reservations)
└── styles/
    └── global.css       # Global styles & design tokens
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) (v18+)
- [pnpm](https://pnpm.io)

### Install & Run

```sh
# Install dependencies
pnpm install

# Start dev server at localhost:4321
pnpm dev
```

### Commands

| Command              | Action                                           |
| :------------------- | :----------------------------------------------- |
| `pnpm install`       | Install dependencies                             |
| `pnpm dev`           | Start local dev server at `localhost:4321`        |
| `pnpm build`         | Build production site to `./dist/`               |
| `pnpm preview`       | Preview production build locally                 |
| `pnpm astro ...`     | Run Astro CLI commands (`add`, `check`, etc.)    |

## SEO

The site includes:

- Open Graph & Twitter Card meta tags
- Schema.org JSON-LD structured data (`Winery` type)
- Canonical URLs, keywords, and robots directives
- `robots.txt` and optimized OG image

## License

Private — all rights reserved.
