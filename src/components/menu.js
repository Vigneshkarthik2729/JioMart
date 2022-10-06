import './menu.css';
import {useNavigate} from 'react-router-dom';

export default function Menu(props) {
    const navigate = useNavigate()
    return (
        <div>
            <div className='menulistContainer'>
                {/* <h1 className='headmenu'>Menu</h1> */}
                <div className='menulistWrapper'>
                        <div className='menuBox' onClick={()=>{
                            navigate(`/${props.path}`)
                        }}>
                            <div className='imgarea'><img className='images' src={props.image} width={220} height={250}></img></div>
                            <div className='listname'>{props.list}</div>
                        </div>
                </div>
            </div>
        </div>
    );
}