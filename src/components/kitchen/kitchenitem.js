import AppContext from '../../context';
import { useContext } from 'react';
import {MdAddShoppingCart} from 'react-icons/md';

function KitchenItems(props) {

    const store = useContext(AppContext)

    const kitchenHandle = ()=>{
        store.addCart(props.detail)
        console.log(store.cart);
    }

    return(
        <div className="kitchen">
            <div>
                <img className="kimage" src={props.image}></img>
            </div>
            <h2 className="kname">{props.name}</h2>
            <p className='kmodel'>Model: {props.model}</p>
            <p className="kprice">Price: {props.price}</p>
            <p className='koffer'>Offer: {props.offer}</p>
            <div>
                <button onClick={kitchenHandle}>Add to cart<br></br><MdAddShoppingCart></MdAddShoppingCart></button>
            </div>
        </div>
    )
}

export default KitchenItems;