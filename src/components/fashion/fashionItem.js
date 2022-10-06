import {MdAddShoppingCart} from 'react-icons/md';
import AppContext from '../../context';
import { useContext } from 'react';

function FashionItems(props) {
    const store = useContext(AppContext)

    const fashionHandle = ()=>{
        store.addCart(props.detail)
        console.log(store.cart);
    }
    return (
        <div className="fashions">  
            <div>
            <img className="fimage" src={props.image}></img>
            </div>
            <h2 className="fname">{props.name}</h2>
            <p className="fprice">Price: {props.price}</p>
            <p className="foffer">Offer: {props.offer}</p>
            <p className="fmodel">Model: {props.model}</p>
            <div>
                <button className='btn' onClick={fashionHandle}><MdAddShoppingCart></MdAddShoppingCart><br></br>Add to cart</button>
            </div>
        </div>
    )
}

export default FashionItems;