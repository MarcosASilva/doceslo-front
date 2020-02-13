import React, { Component } from "react";

export default class Bolo extends Component {
  render() {
    const {bolos} = this.props
    const Capitalize= (str) =>{
        return str.charAt(0).toUpperCase() + str.slice(1);
        }
    return (
      <div className="container">
        <div className="itens">
            
       {
   bolos.map((bolo) => { 
      return  (<div className=" item ">
        <div className="card card-conteudo">
          <img
            className="card-img-top img-conteudo"
            src= {bolo.foto}
            alt="Card  cap"
          />
          <div className="card-body">
            <h5 className="card-title">{Capitalize(bolo.nome)}</h5>
            <p className="card-text">Tamanho/Quantidade: <strong> { Capitalize( bolo.tamanho) }  </strong> </p>
            <p className='card-text'> <strong>R${bolo.preco}</strong> </p>
            {/*<a href="/" className="btn btn-primary">
              Go somewhere
            </a>*/}
          </div>
        </div>
      </div>)
    })
       } 

        </div>
      </div>
    );
  }
}
