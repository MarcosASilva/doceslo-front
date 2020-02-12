import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../../node_modules/jquery/dist/jquery.min.js";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import '../App.css';
import Navbar from '../components/Navbar'
import Bolo from  '../components/Bolo'

export default class Doces extends Component {
  render(){
    const bolos = [
      {
        'nome' : 'doce 1',
        'tamanho' : 'Cento',
        'preco' : 65 ,
        'foto' : "https://img.stpu.com.br/?img=https://s3.amazonaws.com/pu-mgr/default/a0R0f00000zSjKeEAK/5bb37aeee4b03c00a61750a1.jpg&w=710&h=462"
      },      
      {
        'nome' : 'Doce 2',
        'tamanho' : 'Cento',
        'preco' : 85 ,
        'foto' : "https://img.stpu.com.br/?img=https://s3.amazonaws.com/pu-mgr/default/a0R0f00000zSjKeEAK/5bb37aeee4b03c00a61750a1.jpg&w=710&h=462"
      },
      {
        'nome' : 'Doce 3',
        'tamanho' : 'Cento',
        'preco' : 95 ,
        'foto' : "https://img.stpu.com.br/?img=https://s3.amazonaws.com/pu-mgr/default/a0R0f00000zSjKeEAK/5bb37aeee4b03c00a61750a1.jpg&w=710&h=462"
      },
      {
        'nome' : 'Doce 1',
        'tamanho' : 'Cento',
        'preco' : 125 ,
        'foto' : "https://img.stpu.com.br/?img=https://s3.amazonaws.com/pu-mgr/default/a0R0f00000zSjKeEAK/5bb37aeee4b03c00a61750a1.jpg&w=710&h=462"
      }
    ];
    return (
      <div className="App">
        <Navbar />
        <p className="titulo">Doces </p>
        <Bolo bolos = { bolos} />
      </div>
    );
  }
  }
  

