import React from 'react';

import Header from '../../components/Header';
import MenuGrid from '../../components/MenuGrid';

import imgLanding from '../../assets/images/landing.svg';

import imgLogin from '../../assets/images/login.png';

import './styles.css';

class Help extends React.Component{
    constructor(props){
        super(props);
        this.state = { loged: this.props.location.state.loged };
    }
    render(){
        if(this.state.loged){
            return(
                <div id="" className="page-helping"> 
                    <Header to="/" className=""/>
                    <h2 id="text-center">Escolha a forma de atendimento</h2>
                    <div id="page-helping-content">
                        <MenuGrid active=" active" to="/help" span="" spanCl="" name="help-grid"/>
                    </div>
                </div>
            );
        }
        else{
            return(
                
                <div id="page-content-helping" >
                    <Header to="/" className="logo-header-fixed"/>
                    <h2>Venha ser um voluntario</h2>
                    <img src={imgLanding} alt="" className="imgLanding"/>
                    <div className="bloco-text">
                        <h3>Buscando sempre ajudar</h3>
                        <p className="text">
                            O projeto ajuda solidaria tem como objetivo levar a saude mental <br/>
                            as pessoas atravez da internet de forma facil e gratuita, buscamos <br/>
                            atender e buscar ajudar a diminuir o stress e os problemas psicologicos <br/>
                            causados pela pandemia do covid-19.
                        </p>
                    </div>
                    <div className="bloco-text">
                        <h3>Como ser um voluntario</h3>
                        <p className="text">
                            Para ser voluntario basta ter uma forte vontade em ajudar, facilidade em <br/>
                            se comunicar, ser calmo para auxiliar pessoas em panico, e ter empatia com <br/>
                            o proximo.
                        </p>
                        <p className="text">
                            Para começar a realizar atendimentos você precisara entrar em contato com nossa <br/>
                            equipe e realizar um treinamento para que possa estar preparado para lidar com os <br/>
                            pacientes e seus problemas, apos entrar em contato e realizar o treinamento sera <br/>
                            disponibilizado um login e senha para que o voluntario possa estar acessando a area <br/>
                            de atendimento.
                        </p>
                        <div id="loginImg">
                            <img src={imgLogin} alt=""/>
                        </div>
                    </div>
                    <div className="bloco-text" id="contato">
                        <h3>Entre em contato</h3>
                        <p className="text">entre em contato e faça parte do nosso time de voluntarios</p>
                        <a href=" tell: (41)9889175454" id="tell">(41)98881-8187</a>
                        <a href="mailto:ajuda@ajudasolidaria.com.br" id="email">Email</a>
                    </div>

                </div>
    
            );
        }
    }
}

export default Help;