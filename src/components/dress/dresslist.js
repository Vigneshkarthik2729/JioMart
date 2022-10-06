import {useEffect, useState} from "react";
import DressItems from "./dressitem";
import './dresslist.css';

export default function DressList(props) {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://63171addcb0d40bc414c1b55.mockapi.io/dress').then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                return false;
            }
            }).then((data) => {
                setItems(data);
            })
    }, [])

    return (
        <div className="container">
            <div className="wrapper">
                {
                    items.map((data) => {
                        return (
                            <DressItems key={data.id} name={data.name}  model={data.model} price={data.price} offer={data.offer} image={data.image} detail={data}></DressItems>
                        )
                    })
                }
            </div>
        </div>
    )
}