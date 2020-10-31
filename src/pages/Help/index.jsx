import React from 'react';

import Header from '../../components/header';
import MenuGrid from '../../components/MenuGrid';

import './styles.css';

function Help(){
    return(
        <div id="page-helping"> 
            <Header to="/" className=""/>
            <div id="page-helping-content">
                <MenuGrid active=" active" to="/help" />
            </div>
        </div>
    )
}

export default Help;