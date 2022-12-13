import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Main from './components/Main';
import Mywork from './components/Mywork';
import ProjecDetails from './components/ProjecDetails';
import ProjecDetails1 from './components/ProjecDetails1';
import ProjecDetails2 from './components/ProjecDetails2';
import Skills from './components/Skills';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Main></Main>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:"/about",
          element:<About></About>
        },
        {
          path:"/project",
          element:<Mywork></Mywork>
        },
        {
          path:"/contact",
          element:<Contact></Contact>
        },
        {
          path:"/skills",
          element:<Skills></Skills>
        },
        {
          path:"/project/1",
         
          element:<ProjecDetails></ProjecDetails>
        },
        {
          path:"/project/2",
         
          element:<ProjecDetails1></ProjecDetails1>
        },
        {
          path:"/project/3",
         
          element:<ProjecDetails2></ProjecDetails2>
        },

        
      ]
    }
    
  ])
  return (
    <div  data-theme="forest">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
