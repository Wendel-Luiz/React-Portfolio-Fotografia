import React from 'react';
//import './App.scss';

import {
    Redirect,
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
                <Route path='/Ensaios'>
                    <h1>Ensaios</h1>
                </Route>
                <Route path='/Blog'>
                    <h1>Blog</h1>
                </Route>
                <Route path='/Home'>
                    <Home />
                </Route>
                <Route path='/'>
                    <Redirect to="/Home" />
                </Route>  
            </Switch>
            <Footer />
        </>
    );
}

const Home = () => {
    return(
        <>
            <h1>Home</h1>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
        </>
    );
}