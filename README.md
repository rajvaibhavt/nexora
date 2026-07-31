# React + Vite

Nexora is a responsive product discovery web application built with React and Tailwind CSS. It provides a clean interface for exploring products fetched from a public REST API, searching through results, and testing a client-side validated login experience.

## Features

- Fully responsive landing page
- Product data fetched from a public REST API
- Responsive product cards
- Product search
- Loading skeletons while data is being fetched
- Error handling with retry functionality
- Empty search state
- Login form with client-side validation
- Email format validation
- Password validation
- Show/hide password
- Responsive navigation menu
- Reusable React components
- Centralized color configuration

## Tech Stack

- React
- Vite
- Tailwind CSS
- React Router
- JavaScript
- REST API
- ESLint
- Git & GitHub

## Project Structure

```text
src/
├── assets/
├── components/
│   ├── About.jsx
│   ├── CTA.jsx
│   ├── Explore.jsx
│   ├── Features.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   └── ProductSkeleton.jsx
├── pages/
│   ├── Home.jsx
│   └── Login.jsx
├── services/
│   └── api.js
├── styles/
│   └── colors.css
├── utils/
│   └── validation.js
├── App.jsx
├── index.css
└── main.jsx
```

The login form validates:

- Required email and password fields
- Valid email format
- Minimum password length
- Uppercase letter
- Lowercase letter
- Number
Validation is performed on the client side.
## API Integration

Product data is fetched from a public REST API through the API service located in:

```text
src/services/api.js
```

The interface includes loading, error, retry, search, and empty-result states.

## Production Build

Create a production build:

```bash
npm run build
```

Run ESLint:

```bash
npm run lint
```


## Author

Raj Vaibhav