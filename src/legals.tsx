import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import OctobreHeaderNav from './components/molecules/OctobreHeaderNav.tsx'
import Legals from './components/MentionsLegales/Legals.tsx'
import './App.css'
import './scss/octobre.scss'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <OctobreHeaderNav></OctobreHeaderNav>
    <main style={{"marginTop":"7em"}}>
        <h1 style={{ "display": "none" }}>Octobre Conseil</h1>
        <Legals></Legals>
    </main>
  </React.StrictMode>,
)
