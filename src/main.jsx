import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import DataBindingComponent2 from './components/DataBindingComponent2.jsx'
import DataBindingComponent1 from './components/DataBindingComponent1.jsx'
import DataBindingTableComponent from './components/DataBindingTableComponent.jsx'
import DataBindingNestedComponent from './components/DataBindingNestedComponent.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <DataBindingComponent1 />
    <DataBindingComponent2 />
    <DataBindingTableComponent />
    <DataBindingNestedComponent />
  </StrictMode>,
)
