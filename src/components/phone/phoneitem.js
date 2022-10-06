import {MdAddShoppingCart} from 'react-icons/md';
import { useContext } from 'react';
import AppContext from '../../context';

export default function PhoneItems(props) {

    const store = useContext(AppContext)

    const phoneHandle = ()=>{
        store.addCart(props.detail)
        console.log(store.cart);
        
    }
    
    return (
        <div className="phoneitem">
            <div>
                <img className="pimage" src={props.image}/>
            </div>
            <h2 className="pname">{props.name}</h2>
            <p className="pprice">{props.price}</p>
            <div>
                <button onClick={phoneHandle}><MdAddShoppingCart></MdAddShoppingCart><br></br>Add to cart</button>
            </div>
        </div>
    )
}