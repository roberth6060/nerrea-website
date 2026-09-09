import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: #0061c6;
    --color-primary-hover: #0074e8;
    --color-text: #111827;
    --color-muted: #4b5563;
    --color-background: #ffffff;
    --color-surface: #f4f8fc;
    --color-border: #dbe5ef;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    min-width: 320px;
    background-color: var(--color-background);
    color: var(--color-text);
    font-family: "Inter", "Segoe UI", sans-serif;
    line-height: 1.5;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  input,
  textarea,
  select {
    font: inherit;
  }

  button {
    cursor: pointer;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  h1,
  h2,
  h3,
  p {
    margin-top: 0;
  }

  h1,
  h2,
  h3 {
    line-height: 1.15;
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2rem;
  }

  p {
    color: var(--color-muted);
  }

  .container {
    width: min(100% - 3rem, 1200px);
    margin: 0 auto;
  }

  .section {
    padding: 5rem 0;
  }

  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 44px;
    padding: 0.75rem 1.25rem;
    border: 1px solid var(--color-primary);
    border-radius: 6px;
    background-color: var(--color-primary);
    color: #ffffff;
    font-weight: 700;
    transition:
      background-color 0.2s ease,
      transform 0.2s ease;
  }

  .button:hover {
    background-color: var(--color-primary-hover);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    .container {
      width: min(100% - 2rem, 1200px);
    }

    .section {
      padding: 3.5rem 0;
    }
  }
`;

export default GlobalStyle;
