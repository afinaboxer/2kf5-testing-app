import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { css, Global } from '@emotion/react'
import { BrowserRouter } from 'react-router'; // Если подчеркнет, замени на 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Global
      styles={css`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: Arial, sans-serif;
          color: #111318;
        }

        button,
        input {
          font: inherit;
        }
        button {
          cursor: pointer;
        }
        a {
          text-decoration: none;
        }
        ol,
        ul {
          list-style: none;
        }
      `}
    />
    
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
