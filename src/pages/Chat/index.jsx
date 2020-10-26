import React from "react";
import Header from "../../components/header";

import send from '../../assets/images/icons/seta-direita.svg';

import './styles.css';


class Chat extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], text: '' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
      return (
        <div>
        <Header to="/helping" className="logo-header-fixed" />
          <Mensagens items={this.state.items} />
          <form onSubmit={this.handleSubmit}>
            <div className="textarea-block" is>
              <div id="textarea-content">
                <textarea
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
      const newItem = {
        text: this.state.text,
        id: 'anonimo -' +  new Date().toLocaleTimeString() 
      };
      this.setState(state => ({
        items: state.items.concat(newItem),
        text: ''
      }));
    }
}
function Mensagens(props) {
      return (
        <div id="page-mensage">
          {props.items.map(item => (
            <div className="container-block darker" >
              <p>

              {item.text}

              </p>

              <span class="time-right">{item.id}</span> 
            </div>
          ))}
        </div>
        



      );
}

export default Chat;