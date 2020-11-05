import  React from 'react';
import Header from '../../components/Header';
import sucessImg from '../../assets/images/icons/success-check-icon.svg';
import remove from '../../assets/images/icons/remove.svg';

import './styles.css';

class Notes extends React.Component{
    constructor(props){
        super(props)
        this.state = { text:'', id:0 , notas:[]};
        this.clickButton = this.clickButton.bind(this);
        this.changeText = this.changeText.bind(this);
    }
    
    
    render(){
        return(
            <div className="page-notes-content">
                <Header to="/" className="logo-header-fixed"/>
                <div id="input-notes">
                    <input type="text" id="text-input" value={this.state.text} onChange={this.changeText}/>
                    <button onClick={this.clickButton}>Adicionar</button>
                </div>
                <Anotacoes item= {this.state.notas}  />
    
            </div>
        )
    }
    changeText(e){
        e.preventDefault();
        this.setState({ text: e.target.value});
    }
    clickButton(e){
        e.preventDefault();
        const item = {
            text: this.state.text,
            length: this.state.id
        };
        this.setState(state => ({
            notas: state.notas.concat(item),
            text: '',
            id: this.state.id + 1
          }));
    }
}


function Anotacoes(props){
    return(
        <div id="lista-objetivos">
            <ol>
                {props.item.map( item => (
                    <li key={item.id} id= {item.id} className="lista-objetivos"> 
                        <button >
                            <img src={sucessImg} alt="Objetivo Cumprido"/>
                        </button > 
                        <button>
                            <img src={remove} alt="Remover objetivo"/>
                        </button>
                        {item.text} 
                    </li>  
                ))} 
            </ol>
        </div>  
    )
}

export default Notes;