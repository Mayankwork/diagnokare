
import './App.css';
import {useState} from 'react'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import { Provider } from 'react-redux';
import store from './utils/store';
const appRouter = createBrowserRouter([{
  path:'/',
  element:<HomePage/>, 
},{
  path:'/about',
  element:<AboutUs/>, 
},{
  path:'/contact',
  element:<ContactUs/>, 
}]);

function App() {
   

  return (
    <>
    <Provider store={store}>
    <RouterProvider router={appRouter}/>
    </Provider>
      
    </>
  );
}

export default App;
