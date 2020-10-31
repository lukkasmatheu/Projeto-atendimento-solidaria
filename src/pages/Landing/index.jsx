import React from 'react';
import {Link} from 'react-router-dom';

import logo from '../../assets/images/logo.svg';
import landing from '../../assets/images/landing.svg';

import imgLogin from '../../assets/images/icons/enter.svg'

import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import studyIcon from '../../assets/images/icons/study.svg';

import "./styles.css";

class Landing extends React.Component{
    constructor(props){
        super(props);
        this.state = { };
        this.handleClick = this.handleClick.bind(this);
    }
    render(){
        return(
            <div id= "page-landing">
                <header className="header-landing-page">
                    <div className="logo-container">
                        <img src={logo} alt="Logo marca Proffy"/>
                        <h1>Atendimento Solidario</h1>
                    </div>
                    <div className="login-button">
                        <button id="login" onClick={this.handleClick}>Login <img src={imgLogin} alt="imagem para botão de login"/></button>
                    </div>
                </header>
                <div id="page-landing-content" className="container">
                        
                    <img 
                        src={landing} 
                        alt="pessoas atentendo no computador" 
                        className="background-image"
                    />
        
                    <div className="buttons-container">
                    
                        <Link to="/helping" className="help">
                            <img src= {studyIcon} alt="Estudar"/>
                            Buscar Ajuda
                        </Link>
                        
                        <Link to="/help" className="helping">
                            <img src={giveClassesIcon} alt="Dar aula"/>
                            Quero Ajudar
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
    handleClick(){
        
    }
}

export default Landing;