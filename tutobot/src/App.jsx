import React from 'react';
import AppRouter from './routers/AppRouter';
import Navbar from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import Registro from './pages/Registro';
import CardTuto from './components/CardTuto';
import Tutos from './pages/Tutos';
import ProfileAlumno from "./pages/ProfileAlumno";
import './App.css';

const activado = false;

function App() {
  
    return (
    
      <div className="App">
        <div className='app_body'>

        <AppRouter/>

         

        </div>
        
      </div>
    );
  }


export default App;
