import React from 'react';

import './styles.css';
import Header from '../../components/Header';
import MenuGrid from '../../components/MenuGrid';

function Helping(){
    return(
        <div id="page-helping"> 
            <Header to="/" className=""/>
            <div id="page-helping-content">
                <MenuGrid active="" to="/helping" span="2" spanCl="span" />
            </div>
        </div>
    )
}

export default Helping;