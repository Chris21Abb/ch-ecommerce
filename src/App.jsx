import './App.css'


import ItemListContainer from "./container/ItemListContainer/index";
import { useState } from "react";
import NavBar from './components/styles/NavBar/NavBar';
import Titulo from './components/styles/Titulo/Titulo';

import ItemDetailContainer from './components/ItemDetailContainer';

import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

    return (
        <div>
       
            <NavBar />

            

            <ItemListContainer texto='OnLine Merch' />

            <ItemDetailContainer />


        

        </div>
    
        
    );
}

export default App;
