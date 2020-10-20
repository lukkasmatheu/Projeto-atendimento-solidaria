import React from 'react';
import {Link} from 'react-router-dom';

import chat from '../../assets/images/icons/chat.svg';
import videochamada from '../../assets/images/icons/videochamada.svg';


import './styles.css';
import Header from '../../components/header';

function Helping(){
    return(
        <div id="page-helping"> 
            <Header to="/" className=""/>
            <div id="page-helping-content">
                <div id="menu-items">
                    <Link to="/chat" className="grid-menu" id="grid-menu">
                        <img src={chat} alt=""/>
                        <h3>CHAT</h3>
                    </Link>
                    <Link to="/" id="grid-menu" className="grid-menu">
                        <div>
                            <img src={videochamada} alt=""/>
                            <h3>CHAMADA DE VIDEO</h3>
                        </div>
                        
                    </Link>

                    <Link to="/" id="grid-menu" className="grid-menu">
                        <div>
                            <img src={chat} alt=""/>
                            <h3>ANOTAÇÕES</h3>
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Helping;