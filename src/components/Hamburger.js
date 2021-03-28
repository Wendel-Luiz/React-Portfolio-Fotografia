import React from 'react';
import './sass/Hamburger.scss'

export default function Hamburger({classe, onClick}){
    return (
        <div className={'menu-btn-container ' + classe} onClick={onClick}>
            <div className={'menu-btn'}></div>
        </div>
    );
}