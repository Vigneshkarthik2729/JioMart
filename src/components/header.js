import './header.css';
import { FiMenu } from 'react-icons/fi';
import { BsFillCartFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AppContext from '../context';
import { Link } from 'react-router-dom';
import Login from './login';

export default function Header() {

    const navigate = useNavigate();
    const itemno = useContext(AppContext);
    const d = itemno.cart;

    return (
        <div>
            <header>
                <div className="container">
                    <div className="header-wrapper">
                        <div className='menu-bar'>
                            <a className='menu' href='#'><FiMenu fontSize={25} color='white' /></a>
                        </div>
                        <div className='label-name'>
                            <h3 className='label'>JioMart</h3>
                        </div>
                        <input type='search' className='search' placeholder='Search essentials, groceries, and more...'></input>
                        <nav className='nav-bar'>
                            <a className='navbar' onClick={()=>{
                           navigate("signin")
                            }}>Sign-in</a>
                            <a className='navbar' href='#'>Sign-up</a>
                            <span><a><BsFillCartFill onClick={() => {
                                navigate('/cart')  
                            }} /></a>{d.length}</span>
                        </nav>
                    </div>
                </div>
            </header>
        </div>
    )
}