import React, { useState } from 'react';
import { Link, useLocation } from'react-router-dom';

import "./components/sass/Navbar.scss";

import {items} from './data/navbar.json';
import Hamburger from './components/Hamburger';

export default function Navbar(props){
    const [menuActive, setMenuActive] = useState(['inactive', '']);

    const buttonOnclick = () => {
        if(menuActive[0] === 'active')
            setMenuActive(['inactive', ''])
        else
            setMenuActive(['active', 'menu-active'])
    }

    const toggleSubMenu = (event) => {
        if(!event.target.className.includes('sub-list')) return;

        event.target.className = event.target.className.includes('show') ? 'sub-list' : 'sub-list show';
    }

    const clickLink = () => {
        setMenuActive(['inactive', '']);
    }
    

    return (
        <div className="navbar-container">
            <div className="logo">
                <img src={process.env.PUBLIC_URL + '/logo.png'}></img>
            </div>
            <div className="current-page">
                <h3>{useLocation().pathname.substr(1)}</h3>
            </div>
            <div className="navbar-menu">
                <Hamburger classe={menuActive[1]} onClick={buttonOnclick} />
            </div>
            <div className={'navbar ' + menuActive[0]}>
                <List elements={items} active={true}/>
            </div>
        </div>
    );

    function List({elements, active}){
        return (
            <ul>
                {elements.map(item => (
                    item.subMenu ? 
                        <li key={item.name} className='sub-list' onClick={(event) => toggleSubMenu(event)}>
                            {item.name}
                            <List elements={item.subMenu} active={false}/>
                        </li> 

                        :
                         
                        <li key={item.name}> <Link to={item.link} onClick={clickLink}> {item.name} </Link> </li>
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