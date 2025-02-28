import { StrictMode } from 'react'
import { Provider  as ChakraProvider} from "./components/ui/provider"

import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    
    <ChakraProvider >
    <App />
     </ChakraProvider>
     </BrowserRouter>
   
   </StrictMode>,
)
