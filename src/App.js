import { useState } from "react";
import NavBar from '../src/components/NavBar/NavBar'
import titulo from './components/Titulo/Titulo'
import ItemListContainer from "./container/ItemListContainer/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


function App() {

    const [count , setCount] = useState(0)

    const style = {backgroundColor: 'grey' }

    const handleConsole = () => {
        console.log('evento')
    }

    const fnSaludo = () => {
        console.log('Hola')
    }

    return (
        <div className="App" style={style} onClick={handleConsole}>
        
        <NavBar />

        <input />

        </div>

    )
}

export default App;
