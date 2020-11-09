import React , {useState} from 'react';
import Header from '../../components/Header';
import sucessImg from '../../assets/images/icons/success-check-icon.svg';
import remove from '../../assets/images/icons/remove.svg';
import addImg from '../../assets/images/icons/add.svg';

import './styles.css';

// lista utilizando hook

const Notes = () => {
    const [text,setText] = useState('');
    const [items,setItem]= useState([]);
    
    function deleteItem(index){
        const aux = Array.from(items);
        aux.splice(index, 1);
        setItem(aux);
    }

    function changeText(e){
        e.preventDefault();
        setText(e.target.value);
    }
    function clickButton(e){
        e.preventDefault();
        const lista = Array.from(items);
        const item = {id: items.length , value: text ,bgColor: "#ddd"}
        lista.push(item);
        setItem(lista);
        setText('');
    }
    function changeColor(index){
        const aux = Array.from(items);
        aux[index].bgColor = "#338c39";
        setItem(aux);
    }
    return(
        <div className="page-notes-content">
            <Header to="/diario" className="logo-header-fixed"/>
            <div>
                <form onSubmit={clickButton} id="input-notes">
                    <input type="text" id="text-input" value={text} onChange={changeText}/>
                    <button ><img src={addImg} alt=""/> Adicionar</button>
                </form> 
            </div>
            <div id="lista-objetivos">
                <ol>
                    {items.map(({id, value, bgColor}, index) => (
                        <Anotacoes
                            onDelete={() => {
                                deleteItem(index)}}
                            onComplete={()=>
                                changeColor(index)
                            }
                            key={id}
                            backColor ={bgColor}
                            id= {id}
                            value={value}
                        />
                    ))}
                </ol>
            </div>
        </div>
    )
}


const Anotacoes = ({onDelete ,onComplete, id, value, backColor})=> {
    console.log(backColor);
    return(
            <li key={id} id={id} style={{background: backColor}} className="lista-objetivos"> 
                <button onClick={onComplete}>
                    <img src={sucessImg} alt="Objetivo Cumprido"/>
                </button > 
                <button onClick={onDelete}>
                    <img src={remove} alt="Remover objetivo"/>
                </button>
                {value} 
            </li>   
    )
} 

/*
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
                <Header to="/diario" className="logo-header-fixed"/>
                <div id="input-notes">
                    <input type="text" id="text-input" value={this.state.text} onChange={this.changeText}/>
                    <button onClick={this.clickButton}><img src={addImg} alt=""/> Adicionar</button>
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
            id: state.id + 1
          }));
    }
}


function Anotacoes(props){
    
    return(
        <div id="lista-objetivos">
            <ol>
                {props.item.map( item => (
                    <li key={item.id} id= {item.length} className="lista-objetivos"> 
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
} */

export default Notes;