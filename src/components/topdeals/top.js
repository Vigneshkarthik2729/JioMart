import './top.css';
// import {useNavigate} from 'react-router-dom';

export default function Top(props) {
    // const navigate = useNavigate()
    return (
        <div>
            <div className='topContainer'>
                {/* <h1 className='headmenu'>Menu</h1> */}
                <div className='topWrapper'>
                        <div className='menuBox'>
                            <div className='imgarea'><img className='images' src={props.image} width={220} height={250}></img></div>
                            <div className='listname'>{props.list}</div>
                        </div>
                </div>
            </div>
        </div>
    );
}