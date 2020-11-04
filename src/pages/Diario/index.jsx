import React from 'react';
import  '../../components/MenuGrid/styles.css';
import Header from '../../components/Header';

import ItemGrid from '../../components/MenuGrid/itemGrid';

import diary from '../../assets/images/icons/diary.svg';
import notacion from '../../assets/images/icons/journal.svg';


import './styles.css'

function Diario(){
    return(
        <div id="page-diario" > 
            <Header to="/helping" className=""/>
            <div id="page-diario-content" >
                <div id="menu-items" className="diario">
                    <ItemGrid link="/dia" text= "Diario de Anotações" span="" spanClass = "" imgMenu={diary} description= "diario de anotações" active="" to="/helping"/>
                    <ItemGrid link="/objetivos" text="Lista de Objetivos" imgMenu={notacion} description= "Lista de objetivos" active="" to="/helping" />
                </div> 
            </div>
        </div>
    );
}

export default Diario;