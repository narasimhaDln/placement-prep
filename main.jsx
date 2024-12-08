import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Timer from './Timer.jsx'
// import ThemeProvider from './Contetext.Api/context.jsx'
import fetchData from './Timer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Timer/>
    {/* <uncontrollComponents/> */}
    {/* <form></form> */}
    {/* <handleReactLifeCucles/>
    <ThemeProvider>
      <consume/>
    </ThemeProvider> */}
    <fetchData/>

  </StrictMode>,
)
