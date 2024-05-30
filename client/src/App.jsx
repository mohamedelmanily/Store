import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/product";
import Products from "./pages/Products/Products";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import './App.scss'
import ContactPage from "./pages/contact/ContactPage";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from "react";
import About from "./pages/about/About";

const Layout = () => {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="app">
        <Navbar toggleMode={toggleMode} /> {/* Pass mode and toggleMode as props */}
        <Outlet />
        <Footer />
      </div>
    </ThemeProvider>
  );
};


const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/product/:id',
        element:<Product/>
      },
      {
        path:'/contact',
        element:<ContactPage/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/products/:id',
        element:<Products/>
      },

    ]
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
