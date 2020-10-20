import React from 'react';
import {Link } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';
import back from '../../assets/images/icons/back.svg';

import './styles.css';

function Header(props)
{
    let classHeader = "logo-container-header ";
    classHeader += props.className;
    console.log(classHeader);

    return(
        <header className={classHeader}>
            <div id="back-arow">
                <Link to={props.to} id="arow-back" className="back-page">
                    <div>
                        <img src={back} alt="retornar a pagina anterior" id="back"/>
                    </div>
                </Link> 
            </div>
            <div id="logo">
                <img src={logo} alt="Logo marca"/>
                <h2>Atendimento Solidario</h2>
            </div>
                            
        </header>
    );

}

export default Header;