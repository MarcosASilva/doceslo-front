import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../../node_modules/jquery/dist/jquery.min.js";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import '../App.css';
import Navbar from '../components/Navbar'
import Bolo from  '../components/Bolo'

export default class Inicio extends Component {
  render(){
    const bolos = [
      {
        'nome' : 'bolo1',
        'tamanho' : 'pequeno',
        'preco' : 65 
      },      
      {
        'nome' : 'bolo2',
        'tamanho' : 'medio',
        'preco' : 85 
      },
      {
        'nome' : 'bolo3',
        'tamanho' : 'grande',
        'preco' : 95 
      },
      {
        'nome' : 'bolo4',
        'tamanho' : 'Extra',
        'preco' : 125 
      }
    ];
    return (
      <div className="App">
        <Navbar />
        
        <h1 className="titulo">Doces Ló</h1>
        <p className="subtitulo">Doces e bolos!</p>
        <div className="container">
            <div className="itens-inicio">
            <div className=" item ">
        <div className="card card-conteudo">
          <img
            className="card-img-top bolo"
            src= "https://vovopalmirinha.com.br/wp-content/uploads/2016/05/bolo-chocolate-simples-1.jpg"
            alt="Card  cap"
          />
          <div className="card-body">
            <h5 className="card-title"> Bolos </h5>
            <a href="/bolos" className="btn btn-primary">
              Acessar
            </a>
          </div>
        </div>
      </div>
      <div className=" item ">
        <div className="card card-conteudo">
          <img
            className="card-img-top "
            src= "https://img.stpu.com.br/?img=https://s3.amazonaws.com/pu-mgr/default/a0R0f00000zSjKeEAK/5bb37aeee4b03c00a61750a1.jpg&w=710&h=462"
            alt="Card  cap"
          />
          <div className="card-body">
            <h5 className="card-title"> Doces </h5>
            <a href="/doces" className="btn btn-primary">
              Acessar
            </a>
          </div>
        </div>
      </div>
                
            </div>

        </div>
      </div>
    );
  }
  }
  

