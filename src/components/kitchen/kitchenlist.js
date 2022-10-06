import { useEffect, useState } from "react";
import './kitchenlist.css'
import KitchenItems from "./kitchenitem";


function Kitchenlist(props) {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://63171addcb0d40bc414c1b55.mockapi.io/appliance').then((response) => {
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
                            <KitchenItems key={data.id} image={data.image} name={data.name} price={data.price} offer={data.offer} model={data.model} detail={data}></KitchenItems>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Kitchenlist;