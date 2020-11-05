import React from 'react';
import {Link} from 'react-router-dom';

import logo from '../../assets/images/logo.svg';
import landing from '../../assets/images/landing.svg';

import imgLogin from '../../assets/images/icons/enter.svg'

import imgCor from '../../assets/images/coracaoM.svg';
import imgCoracao from '../../assets/images/icons/coracao.svg';

import "./styles.css";

class Landing extends React.Component{
    constructor(props){
        super(props);
        this.state = { isAutent: false , classLogin: 'login-desativado' , classLanding: 'container', loged: false, text: '', invalid: ''};
        this.handleClick = this.handleClick.bind(this);
        this.handleClickLogin = this.handleClickLogin.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount(){
        const login = localStorage.getItem('@welcome-app/username');
        if(login !== null)
        {
            this.logado();
        }
    }
    componentWillUnmount() {
        localStorage.removeItem('@welcome-app/username');
    }

    render(){
        return(
            <div className="page-landing" >
                <header className="header-landing-page">
                    <div className="logo-container">
                        <img src={logo} alt="Logo marca Atendimento solidario"/>
                        <h1>Atendimento Solidario</h1>
                    </div>
                    <div className="login-button">
                        <button id="login" onClick={this.handleClick}>Login <img src={imgLogin} alt="imagem para botão de login"/></button>
                    </div>
                </header>
                <div id="page-landing-content" className={this.state.classLanding}>
                        
                    <img 
                        src={landing} 
                        alt="pessoas atentendo no computador" 
                        className="background-image"
                    />
        
                    <div className="buttons-container">
                    
                        <Link to="/helping" className="help">
                            <img src= {imgCoracao} alt="Busca ajuda"/>
                            Buscar Ajuda
                        </Link>
                        
                        <Link to={{
                                    pathname:"/help",
                                    state:{
                                        loged : this.state.loged
                                    }
                                }}
                         className="helping">
                            <img src={imgCor} alt="Ajudar"/>
                            Quero Ajudar
                        </Link>
                    </div>
                </div>
                <div className={this.state.classLogin}>
                    <div id="loginId">

                        <h2>Login</h2>
                        <div id="form">
                            <form onSubmit={this.handleClickLogin}>
                                <div className="field">
                                    <label htmlFor="name">E-mail/Login</label>
                                    <input type="text" placeholder="Login" />
                                </div>
                                <div className="field">
                                    <label htmlFor="password">Senha</label>
                                    <input type="password" placeholder="Senha" id={this.state.invalid} onChange={this.handleChange} />
                                </div>
                            </form>
                            <button id="subButt" onClick={this.handleClickLogin}>LOGIN</button>
                        </div>
                    </div>
                </div>    
            </div>
        );
    }
    handleChange(e) {
        this.setState({ text: e.target.value });
    }
    handleClickLogin(){
        if(this.state.text === ''){
            this.setState(state => ({
                invalid: 'invalid'
          }));
        }else{
            alert('Logado com sucesso');
            this.setState(state => ({
                classLogin: 'login-desativado',
                isAutent: false,
                classLanding: 'container',
                invalid: '',
                loged: true
                
          }));
          localStorage.setItem('@welcome-app/username', this.state.loged );
        }

    }
    logado(){
        this.setState(state => ({
            loged: true
      }));
    }
    handleClick(){
        if(this.state.isAutent === false){
            this.setState(state => ({
                classLogin: 'login-form',
                isAutent: true,
                classLanding: 'active'
          }));
        }
        else{
            this.setState(state => ({
                classLogin: 'login-desativado',
                isAutent: false,
                classLanding: 'container'
          }));
        }
        
    }
}

export default Landing;