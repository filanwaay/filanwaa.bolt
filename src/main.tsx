import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// CSS toos ah (si aad u hesho qaab)
const styles = `
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { 
    background-color: #F5EDE0; 
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    color: #12211B;
    line-height: 1.6;
  }
  .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
  a { text-decoration: none; }
  h1, h2, h3 { font-weight: 700; }
`

const styleSheet = document.createElement('style')
styleSheet.textContent = styles
document.head.appendChild(styleSheet)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)