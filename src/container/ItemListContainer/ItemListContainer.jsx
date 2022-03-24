import {useEffect, useState} from 'react'

const productos = [
    {id: '1', categoria: 'camisetas', name:"dc vest", price:'450' },
    {id: '2', categoria: 'camisetas', name:"dc cops", price:'480' },
    {id: '3', categoria: 'camisetas', name:"dc fire", price:'430' },
    {id: '4', categoria: 'camisetas', name:"dc albums", price:'480' },
    {id: '5', categoria: 'camisetas', name:"dc faces", price:'460' }
]

const task = new Promise((resolve, reject)=>{

    let condition = true
    if (condition) {
        resolve  ('Producto')
    } else {
        reject ('404 not found')
    }

});





function ItemListContainer({greeting, titulo}) {
    const [ count, setCount ] = useState ( 0 ) 
    const [ bool, setBool ] = useState ( true )
    
    useEffect(()=>{
        console.log('siempre 1')
    
    })

    useEffect(()=>{
        console.log('api 2')
    
    })

    useEffect(()=>{
        alert('si cambia bool 3')
    
    }, [bool])
    
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

setTimeout(()=> {
task
.then (resp => {console.log(resp);
    return;
})

.catch( err => console.log(err))
.then (resp => console.log(resp))
.finally (()=> console.log('Siempre al final'));
}, 2000);

export default ItemListContainer