import './product.css';
import Menu from './menu';
import img1 from '../components/Images/fashion accesories.jpeg';
import img2 from '../components/Images/kitchen appliance.jpg';
import img3 from '../components/Images/smartphone.jpg';
import img4 from '../components/Images/clothes.jpg';
import Toplist from './topdeals/toplist';

export default function Product() {
    const menu = [
        {
            image: img1,
            list: 'fashion Accesories',
            path: "fashion"
        },
        {
            image: img2,
            list: 'kitchen Appliance',
            path: "kitchen"
        },
        {
            image: img3,
            list: 'Smartphone',
            path: "smartphone"
        },
        {
            image: img4,
            list: 'Mens wear',
            path: "mens"
        }
    ]
    return (
        <div>
            {/* <Menulist list={menu[0].list}></Menulist> */}
            <div className='menuContainer'>
                <h3 className='headmenu'>Shop from top categories</h3>
                <div className='menuWrapper'>
                    {
                        menu.map((menus) => {
                            return <Menu key={menus.list} list={menus.list} image={menus.image} path={menus.path}></Menu>
                        })
                    }
                </div><br></br><br></br>
                <Toplist></Toplist>

            </div>
        </div>
    );
}