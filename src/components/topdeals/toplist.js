import Top from './top.js'
import img1 from '../Images/camera.jpg';
import img2 from '../Images/laptop.jpg';
import img3 from '../Images/ricebran.jpg';
import img4 from '../Images/shoes.jpg';
import img5 from '../Images/gym.jpg';

export default function Toplist() {
    const top = [
        {
            image : img1,
            list: 'Camera',
            path: "cam"
        },
        {
            image : img2,
            list: 'laptop',
            path: "lap"
        },
        {
            image : img3,
            list: 'ricebran',
            path: "oil"
        },
        {
            image: img4,
            list: 'Mens wear',
            path: "shoes"
        },
        {
            image: img5,
            list: 'gym',
            path: "equip"
        }
        // {
        //     image: img6,
        //     list: 'gym',
        //     path: "equip"
        // },
        // {
        //     image: img7,
        //     list: 'gym',
        //     path: "equip"
        // }
    ]
    return (
        <div>
            <div className='menuContainer'>
                <h3 className='headmenu'>Top Deals For You</h3>
                <br></br>
                <br></br>
                <div className='menuWrapper'>
                    {
                        top.map((menus) => {
                            return <Top key={menus.list} list={menus.list} image={menus.image} path={menus.path}></Top>
                        })
                    }
                </div>
            </div>
        </div>
    );
}