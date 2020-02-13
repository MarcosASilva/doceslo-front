import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../../node_modules/jquery/dist/jquery.min.js";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import '../App.css';
import Navbar from '../components/Navbar'
import Bolo from '../components/Bolo'
import bolo2 from '../img/bolo2.jpeg'
import bolo5 from '../img/bolo5.jpeg'
import bolo3 from '../img/bolo3.jpeg'
import bolo4 from '../img/bolo4.jpeg'

export default class Bolos extends Component {
  render(){
    const bolos = [
      {
        'nome' : 'bolo1',
        'tamanho' : 'pequeno',
        'preco' : 65,
        'foto': bolo2
      },      
      {
        'nome' : 'bolo4',
        'tamanho' : 'medio',
        'preco' : 85 ,
        'foto' : bolo3
      },
      {
        'nome' : 'bolo3',
        'tamanho' : 'grande',
        'preco' : 95 ,
        'foto' : bolo4
      },
      {
        'nome' : 'bolo4',
        'tamanho' : 'Extra',
        'preco' : 125 ,
        'foto' : bolo5
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
  

