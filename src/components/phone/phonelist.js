import { useEffect, useState } from "react";
import PhoneItems from "./phoneitem";
import './phonelist.css';


export default function PhoneList() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://63171addcb0d40bc414c1b55.mockapi.io/smartphone').then((response) => {
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
                            <PhoneItems key={data.id} image={data.image} name={data.name} price={data.price} detail={data}></PhoneItems>
                        )
                    })
                }
            </div>
        </div>
    )
}

