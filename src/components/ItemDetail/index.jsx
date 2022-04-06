import './ItemDetail.css';
import React from "react";
import ItemCount from '../ItemCount';


export const ItemDetail = (data) => {
    return (
       <div className="container">
        <div className="detail">
            <img className='detail_image' src={data.image} alt="" />
            <div className="content">
            <h1>{data.title}</h1>
        </div>
        </div>
        </div>
    );
}



function ItemDetail ({ prod }) {

    function onAdd(cant) {
        console.log(cant)
    }

    return (
        <>
        <img src={prod.foto} className="w-25"/>
        <div>{prod.name}</div>
        <div>{prod.price}</div>
        <ItemCount init-1/>
        </>
    )
}
export default ItemDetail;