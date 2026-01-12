import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import DataBindingComponent2 from './components/DataBindingComponent2.jsx'
import DataBindingComponent1 from './components/DataBindingComponent1.jsx'
import DataBindingTableComponent from './components/DataBindingTableComponent.jsx'
import DataBindingNestedComponent from './components/DataBindingNestedComponent.jsx'
import UseStateGetter from "./components/useStateGetter.jsx";
import NASA_API_DataFetching from './components/NASA_API_DataFetching.jsx'
import EventBindingComponent from "./components/EventBindingComponent.jsx";
import TwoWayBindingComponent from './components/TwoWayBindingComponent.jsx'
import ClassComponent from './components/ClassComponent.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <NASA_API_DataFetching /> */}
    <ClassComponent />
    <TwoWayBindingComponent />
    <EventBindingComponent />
    <DataBindingComponent1 />
    <DataBindingComponent2 />
    <DataBindingTableComponent />
    <DataBindingNestedComponent />
    <UseStateGetter />
  </StrictMode>,
)
