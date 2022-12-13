import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Main from './components/Main';
import Mywork from './components/Mywork';
import ProjecDetails from './components/ProjecDetails';
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
          path:"/project/:id",
          element:<ProjecDetails></ProjecDetails>
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
