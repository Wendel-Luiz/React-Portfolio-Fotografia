import React, { useState } from 'react';
import './sass/Hamburger.scss'

export default function Hamburger(props){
    return (
        <button className={'menu-btn ' + props.classe} onClick={props.onClick}></button>
    );
}