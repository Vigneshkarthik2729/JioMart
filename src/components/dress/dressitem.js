import {MdAddShoppingCart} from 'react-icons/md';
import AppContext from '../../context';
import { useContext } from 'react'; 


export default function DressItems(props){
    const store = useContext(AppContext)

    const dressHandle = ()=>{
        store.addCart(props.detail)
        console.log(store.cart);
    }

    return(
        <div className="dress">
        <div className="container">
            <div>
                <img className='dimage' src={props.image}></img>
            </div>
            <h2 className="dname">{props.model}</h2>
            <p className="dmodel">{props.model}</p>
            <p className='dprice'>{props.price}</p>

            <div>
                <button onClick={dressHandle}><MdAddShoppingCart></MdAddShoppingCart><br></br>Add to cart</button>
            </div>
        </div>
        </div>
    )
}