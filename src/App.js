import React from 'react';
import './App.scss';

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
                {/* <Route path='/About'>
                    <H1 name="About"/>
                </Route>  
                <Route path='/Contato'>
                    <H1 name="Contato"/>
                </Route>   
                <Route exact path='/'>
                    <H1 name="Home"/>
                </Route>  
                <Route exact path='*'>
                    <H1 name="Not Found"/>
                </Route>  */}
            </Switch>
            {/* <Footer /> */}
        </>
    );
}