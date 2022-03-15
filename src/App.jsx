import { useState } from "react";

function App() {

const [count , setCount] = useState(0)

    const style = {backgroundColor: 'black' }

    const handleConsole = () => {
        console.log('evento')
    }

    return (
        <><div className="App" style={style} onClick={handleConsole}></div><navbar>
            <img src="{logo}" className="AppLogo" alt="Logo" />

            <imput />

        </navbar></>
    )
}