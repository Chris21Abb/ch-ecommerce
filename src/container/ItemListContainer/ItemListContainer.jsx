import {useState} from 'react'

function ItemListContainer({greeting, titulo}) {
    const [count, setCount] = useState ( 0 ) 
    
    
    const manejarCount =()=> { 
        
        setCount(count + 1)
    }
    return (
        <div>
            <hr />{greeting}<hr/>
            <label>{count}</label> <br/>
            <button onClick={manejarCount}>Más</button>
            {titulo ({tituloProps: 'soy titulo', submit: 'soy titulo'})}
        </div>
    )
}



export default ItemListContainer