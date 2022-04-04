import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail";


const prod = {id: 1, image: "https://us.123rf.com/450wm/mr_vector/mr_vector1603/mr_vector160301053/52870239-puste-t-shirt-szablon.jpg?ver=6" , title:"thedc"};

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(()=> {
                resolve(prod);
            }, 3000);
        });
        
        getData.then(res => setData(res));
    }, []);
    
    return (
        <ItemDetail  data={data}/>
    );
};


export default ItemDetailContainer  