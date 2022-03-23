import { useState } from "react";
import NavBar from './components/NavBar/NavBar';
import titulo from './components/Titulo/Titulo'
import ItemListContainer from "./container/ItemListContainer/ItemListContainer";


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


function App() {

    const style = {backgroundColor: 'black' }

    const handleConsole = () => {
        console.log('evento')
    }

    const fnSaludo = () => {
        console.log('Hola')
    }

    return (

        <>
        <div className="App" style={style} onClick={handleConsole}>
        
        <NavBar />

        <img src="./components/img/dc.png" className="App-Logo" alt="DC Logo" />

        <input />

        </div>
        
        <ItemListContainer>
        titulo={titulo}

        </ItemListContainer>
        </>
    )
}