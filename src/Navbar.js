import React, { useState } from 'react';
import { Link } from'react-router-dom';

import "./components/sass/Navbar.scss";

import {items} from './data/navbar.json';
import Hamburger from './components/Hamburger';

export default function Navbar(props){
    const [active, setActive] = useState(['active', '']);

    const buttonOnclick = () => {
        console.log("A")
        if(active[0] === 'active')
            setActive(['inactive', ''])
        else
            setActive(['active', 'menu-active'])
    }
    

    return (
        <div className="navbar-container">
            <div className="navbar-menu">
                <Hamburger classe={active[1]} onClick={buttonOnclick} />
            </div>
            <div className={'navbar ' + active[0]}>
                <List elements={items} active={true}/>
            </div>
        </div>
    );

    function List({elements, active}){
        return (
            <ul>
                {elements.map(item => (
                    item.subMenu ? 
                        <li key={item.name} className='sub-list'>
                            {item.name}
                            <List elements={item.subMenu} active={false}/>
                        </li> :
                         
                        <li key={item.name}> <Link to={item.link}> {item.name} </Link> </li>
                ))}
            </ul>  
        )
    }
}



//-------------- VERSÃO ANTIGA-----------------------
// export default () => {
//     const [menuItems, setMenuItems] = useState(items);

//     function onClick(e, item){
//         e.stopPropagation();
//         change(menuItems, item.name, false)
//         setMenuItems([...menuItems])
//     }

//     function change(arr, name, child){
//         arr.forEach(item => {
//             if(item.subMenu){
//                 if(item.name === name){
//                     item.showSubMenu = item.showSubMenu ? false : true;
//                     change(item.subMenu, name, true);
//                     return;
//                 }
//                 if(child){
//                     item.showSubMenu = false;
//                     return;
//                 }
//                 change(item.subMenu, name, false)
//             }
//         })
//     }

//     const Item = ({item}) => {
//         if(item.subMenu){
//             if(item.showSubMenu)
//                 return (
//                     <li className="sub-list" onClick={(e) => onClick(e, item)}>
//                         {item.name}
//                         <List items={item.subMenu}/>
//                     </li>
//                 )

//             return <li className="sub-list" onClick={(e) => onClick(e, item)}>{item.name}</li>
//         }
    
//         return <li><Link to={item.link}>{item.name}</Link></li>
//     }

//     const List = ({items}) => { 
//         return <ul>{ items.map(item => <Item key={item.name} item={item}/>) }</ul>
//     }

//     return (
//         <List items={menuItems} />
//     );
// }