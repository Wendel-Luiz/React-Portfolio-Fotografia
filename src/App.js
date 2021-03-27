import React from 'react';
//import './App.scss';

import {
    Route,
    Switch,
} from 'react-router-dom';

import Navbar from './Navbar';
import Footer from './Footer';

export default function App(){
    return (
        <>
            <Navbar />
            <Switch>   
                <Route path='/Sobre'>
                    <h1>Sobre</h1>
                </Route>  
                <Route path='/Contato'>
                    <h1>Contato</h1>
                </Route>   
                <Route exact path='/Ensaios'>
                    <h1>Ensaios</h1>
                </Route>
                <Route exact path='/Blog'>
                    <h1>Blog</h1>
                </Route>
                <Route exact path='/'>
                    <h1>Home</h1>
                </Route>  
                <Route exact path='*'>
                    <h1>404</h1>
                </Route> 
            </Switch>
            <Footer />
        </>
    );
}