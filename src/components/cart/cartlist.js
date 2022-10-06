import styles1 from './cartlist.module.css';
import { useContext,useEffect } from 'react';
import AppContext from '../../context';
import Cart from './cart';

export default function Cartlist() {

    const cartitem = useContext(AppContext)

    useEffect(() => {
        console.log(cartitem.cart);
    })

    return (
        
        
            <div className={styles1.container}>
                <div className={styles1.wrapper}>
                    {
                        cartitem.cart.map((data) => {
                            return (
                                <Cart key={data.id} image={data.image} name={data.name} price={data.price} offer={data.offer}></Cart>
                            )
                        })
                    }
                </div>
            </div>
        
    
    );
}