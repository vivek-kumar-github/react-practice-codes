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
import LoginComponent from './components/LoginComponent.jsx'
import FormValidationComponent from './components/FormValidationComponent.jsx'
import FormikFormComponent from './components/FormikFormComponent.jsx'
import FormikFormValiditationComponent from './components/FormikFormValidationComponent.jsx'
import YupFormValidationComponent from './components/YupFormValidationComponent.jsx'
import ComponentLifeCycleClassComponent from './components/ComponentLifeCycleClassComponent.jsx'
import ReactHookDemoComponent from './components/ReactHookDemoComponent.jsx'
import ContextDemoComponent from './components/ContextDemoComponent.jsx'
import { CookiesProvider } from 'react-cookie'
import CookieDemoComponent from './components/CookieDemoComponent.jsx'
import ReducerDemoComponent from './components/ReducerDemoComponent.jsx'
import CustomHookDemoComponent from './components/CustomHookDemoComponent.jsx'
import JQueryAjaxDemoComponent from './components/jQueryAjaxDemoComponent.jsx'
import AjaxJqueryUserRegister from './components/AjaxJqueryUserRegister.jsx'
import AxiosApiGetDemoComponent from './components/AxiosApiGetDemoComponent.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <NASA_API_DataFetching /> */}
    <AxiosApiGetDemoComponent />
    <AjaxJqueryUserRegister />
    <JQueryAjaxDemoComponent />
    <CustomHookDemoComponent />
    <ReducerDemoComponent />
    <CookiesProvider>
      <CookieDemoComponent />
    </CookiesProvider>
    <ContextDemoComponent />
    <ReactHookDemoComponent />
    <ComponentLifeCycleClassComponent />
    <YupFormValidationComponent />
    <FormikFormValiditationComponent />
    <FormikFormComponent />
    <FormValidationComponent />
    <LoginComponent />
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
