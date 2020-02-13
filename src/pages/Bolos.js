import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../../node_modules/jquery/dist/jquery.min.js";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import '../App.css';
import Navbar from '../components/Navbar'
import Bolo from  '../components/Bolo'

export default class Bolos extends Component {
  render(){
    const bolos = [
      {
        'nome' : 'bolo1',
        'tamanho' : 'pequeno',
        'preco' : 65,
        'foto' : "https://vovopalmirinha.com.br/wp-content/uploads/2016/05/bolo-chocolate-simples-1.jpg"
      },      
      {
        'nome' : 'bolo2',
        'tamanho' : 'medio',
        'preco' : 85 ,
        'foto' : "https://vovopalmirinha.com.br/wp-content/uploads/2016/05/bolo-chocolate-simples-1.jpg"
      },
      {
        'nome' : 'bolo3',
        'tamanho' : 'grande',
        'preco' : 95 ,
        'foto' : "https://vovopalmirinha.com.br/wp-content/uploads/2016/05/bolo-chocolate-simples-1.jpg"
      },
      {
        'nome' : 'bolo4',
        'tamanho' : 'Extra',
        'preco' : 125 ,
        'foto' : "https://vovopalmirinha.com.br/wp-content/uploads/2016/05/bolo-chocolate-simples-1.jpg"
      }
    ];
    return (
      <div className="App">
        <Navbar />
        <h1 className="titulo">Bolos</h1>
        <Bolo bolos = { bolos} />
      </div>
    );
  }
  }
  

