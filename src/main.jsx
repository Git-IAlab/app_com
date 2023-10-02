import React from 'react'
import ReactDOM from 'react-dom/client'
// import './index.css'
import { Uno } from './components/Uno.jsx'
import { Props } from './components/Props.jsx'
import { Contador } from './components/Contador.jsx'
import { ComponentC } from './components/ComponentC.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Uno /> */}
    {/* <Props  /> */}
    {/* <Contador value={0} /> */}
    <ComponentC value={1} />  
  </React.StrictMode>,
)
