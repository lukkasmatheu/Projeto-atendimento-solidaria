import React from 'react';
import ItemGrid from './itemGrid';

import diario from '../../assets/images/icons/diario.svg';
import chat from '../../assets/images/icons/chat.svg';
import videochamada from '../../assets/images/icons/videochamada.svg';

import './styles.css';

function MenuGrid(props){
    return(
        <div id="menu-items">
                <ItemGrid link="/chat" text="CHAT" imgMenu={chat} description= "chat anonimo" active="" to={props.to}/>
                <ItemGrid link="/videochat" text="CHAMADA DE VIDEO" imgMenu={videochamada} description= "chamada de video" active="" to={props.to}/>
                <ItemGrid link="/diario" text="DIARIO" imgMenu={diario} description= "Diario" active={props.active} to={props.to}/>
        </div>
    );
}

export default MenuGrid;