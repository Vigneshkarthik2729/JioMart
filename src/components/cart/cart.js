import styles from './cart.module.css';

export default function Cart(props) {
    return (
        <div className={styles.cartarea}>  
            <div>
            <img className={styles.cartimage} src={props.image}></img>
            </div>
            <h2 className={styles.cartname}>{props.name}</h2>
            <p className={styles.cartprice}>{props.price}</p>            
        </div>
    );
}