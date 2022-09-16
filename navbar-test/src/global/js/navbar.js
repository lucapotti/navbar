import React from 'react';
import './../css/navbar.css';
import logo from './../../logo.svg'

//Luca, aca es donde vas a desarrollar todo el navbar, y este modulo se importa en App.js

const Navbar = (props) => {
    return (
        <div className="navbar">
            <div className='log-conteiner'>
                <a className='home' href='#'><img src={logo}/></a>
            </div>
            <ul className='navigation'>

                <li className='about'>
                    <p>- Quienes somos?</p>
                </li>

                <li className='cancionero'>
                    <p>Cancionero</p>
                </li>

                <li>
                    <div className='login'>
                        <a href='#'>Ingreso</a>
                        <a className='submit'>- No estas registrado?</a>
                    </div>
                </li>
            </ul>
            
        </div>
    )
}

export default Navbar;
