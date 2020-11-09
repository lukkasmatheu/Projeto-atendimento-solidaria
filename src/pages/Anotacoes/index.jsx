import React from "react";
import Header from "../../components/Header";

import send from '../../assets/images/icons/seta-direita.svg';

import './styles.css';
class Anotacoes extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    render() {
      return (
        <div>
        <Header to="/diario" className="logo-header-fixed" />
          <Mensagens items={this.state.items} />
          <form onSubmit={this.handleSubmit}>
            <div className="textarea-block" is>
              <div id="textarea-content">
                <input type="text"
                  id="caixa-mensagens"
                  onChange={this.handleChange}
                  value={this.state.text}
                />
                <button>ENVIAR <img src={send} alt=""/></button>
              </div>
            </div>
          </form>
        </div>
      );
    }
  
    handleChange(e) {
      this.setState({ text: e.target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (this.state.text.length === 0) {
        return;
      }
      const data = new Date();
      const newItem = {
        text: this.state.text,
        id: data.getDate() +'/'+ data.getMonth() + '/' + data.getFullYear() + '  '+ new Date().toLocaleTimeString() 
      };
      this.setState(state => ({
        items: state.items.concat(newItem),
        text: ''
      }));
    }
}
function Mensagens(props) {
      return (
        <div id="page-anotacoes">  
          {props.items.map(item => (
            <div className="container-block-anotacoes darker" >
              <p>

              {item.text}

              </p>

              <span class="time-right">{item.id}</span> 
            </div>
          ))}
        </div>
      );
}

export default Anotacoes;