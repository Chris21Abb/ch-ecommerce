import ItemCount from "../../components/ItemCount/index";
import ItemList from "../../components/ItemList";
import React, {useState, useEffect} from "react";
import Titulo from "../../components/styles/Titulo/Titulo";


const merch = [

    {id: 1, image: "https://us.123rf.com/450wm/mr_vector/mr_vector1603/mr_vector160301053/52870239-puste-t-shirt-szablon.jpg?ver=6" , title:"thedc"},
    {id: 2, image: "https://us.123rf.com/450wm/mr_vector/mr_vector1603/mr_vector160301053/52870239-puste-t-shirt-szablon.jpg?ver=6" , title:"hoodlum"},
    {id: 3, image: "https://us.123rf.com/450wm/mr_vector/mr_vector1603/mr_vector160301053/52870239-puste-t-shirt-szablon.jpg?ver=6" , title:"police"},
    {id: 4, image: "https://us.123rf.com/450wm/mr_vector/mr_vector1603/mr_vector160301053/52870239-puste-t-shirt-szablon.jpg?ver=6" , title:"hood"},
    {id: 5, image: "https://us.123rf.com/450wm/mr_vector/mr_vector1603/mr_vector160301053/52870239-puste-t-shirt-szablon.jpg?ver=6" , title:"des-tro hoodie"},
    {id: 6, image: "https://us.123rf.com/450wm/mr_vector/mr_vector1603/mr_vector160301053/52870239-puste-t-shirt-szablon.jpg?ver=6" , title:"d city"},
    {id: 7, image: "https://us.123rf.com/450wm/mr_vector/mr_vector1603/mr_vector160301053/52870239-puste-t-shirt-szablon.jpg?ver=6" , title:"i do rap music"},
    {id: 8, image: "https://us.123rf.com/450wm/mr_vector/mr_vector1603/mr_vector160301053/52870239-puste-t-shirt-szablon.jpg?ver=6" , title:"brembo"},

];

export const ItemListContainer = ({texto}) => {

    const [data, setData] = useState ([]);

    useEffect(() => {
        const getData = new Promise(resolve => {setTimeout(()=>
            {resolve(merch);}, 3000);

    });
    getData.then (res => setData(res));
    }, [])

    const onAdd = (quantity) => {
        console.log(`Acabas de comprar ${quantity} unidades`);
    }

    return(
    <>
        <title greeting={texto}/>
        <ItemCount initial={1} stock={10} onAdd={onAdd} />
        <ItemList data={data} />
    </>
    );
}

export default ItemListContainer;