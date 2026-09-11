# NERREA Website

NERREA is a professional business-support website for **NERREA - Your Virtual Assistant**.

NERREA is a small business based in Croatia.

The website presents three core service areas:

- Administrative Help
- Workforce
- Digital Marketing

The site uses a modern, professional layout that is easy to scan. The Workforce page contains the most detailed service information.

## Pages

| Page | Route | Purpose |
| --- | --- | --- |
| Home | `/` | Introduces NERREA, highlights the three service areas, and directs visitors to contact or service pages. |
| Administrative Help | `/administrative-help` | Presents HR services, accounting, and customer support assistance. |
| Workforce | `/workforce` | Explains recruitment, permits, visas, accreditation, training, and rent-a-worker assistance. |
| Digital Marketing | `/digital-marketing` | Presents website creation and social media services. |
| Why NERREA? | `/about` | Explains the company story, approach, and reasons to work with NERREA. |
| Contact | `/contact` | Captures enquiries and helps visitors identify the service they need. |

## Services

### Administrative Help

- HR Services
- Accounting
- Customer Support

### Workforce

- Recruiting
- Croatian Work Permit and HZZ Process
- Philippine Employer Accreditation
- Work Permit and Visa Process
- Personnel Training
- Rent a Worker

### Digital Marketing

- Website Creation
- Social Media

## Technology

- React 19
- TypeScript
- Vite
- React Router
- styled-components
- Oxlint

## Project Structure

```text
src/
|-- assets/              Images and icons
|-- components/          Shared UI components
|   |-- Footer/
|   |-- Hero/
|   |-- Layout/
|   |-- Navbar/
|   `-- ServiceCard/
|-- pages/               Route-level page components
|-- routes/              React Router configuration
|-- App.tsx
|-- GlobalStyle.ts       Global styles and design tokens
`-- main.tsx
```
Shared components use typed props so they can be reused across pages. The Hero component accepts a heading, supporting text, call-to-action links, and optional imagery. Service cards provide a consistent pattern for service lists on the Home page and individual service sections.

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run linting:

```bash
npm run lint
```

Preview the production build:

```bash
npm run preview
```

