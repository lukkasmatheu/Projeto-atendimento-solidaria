import React from 'react';

import Header from '../../components/Header';
import MenuGrid from '../../components/MenuGrid';

import logo from '../../assets/images/landing.svg';

import './styles.css';

class Help extends React.Component{
    constructor(props){
        super(props);
        this.state = { loged: this.props.location.state.loged };
    }
    render(){
        if(this.state.loged){
            return(
                <div id="page-helping"> 
                    <Header to="/" className=""/>
                    <div id="page-helping-content">
                        <MenuGrid active=" active" to="/help" span="" spanCl="" name="help-grid"/>
                    </div>
                </div>
            );
        }
        else{
            return(
                
                <div id="page-helping">
                    <Header to="/" className="logo-header-fixed"/>
                    <h2>Venha ser um voluntario</h2>
                    <img src={logo} alt=""/>
                </div>
    
            );
        }
    }
}

export default Help;