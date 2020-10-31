import React from 'react';
import {Link} from 'react-router-dom';

import './styles.css';

function ItemGrid(props){
    const {link , text , imgMenu , description, active, to} = props;
    const idMenu = "grid-menu" + active;
    return(
        <Link to={{
            pathname:`${link}`,
            state:{
                local: `${to}`
            }
        }}
            className={idMenu}
            id={idMenu} 
        >
            <div>
                <img src={imgMenu} alt={description}/>
                <h3>{text}</h3>
            </div>
        </Link>
        );
}

export default ItemGrid;