import React, { Component } from 'react';

export default class Navbar extends Component {
    render() {
       
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-light myNav" >
    <a className="navbar-brand" href="/">Doces Ló</a>
    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
        aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span></button>
    <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0"> 
            <li className="nav-item active">
                <a className="nav-link" href="/">Inicio <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/bolos">Bolos</a>
            </li>

            <li className="nav-item">
                <a className="nav-link" href="/doces">Doces</a>
            </li>

        </ul>

    </div>
 
</nav>
<div className="linha">

</div>
            </div>
        )
    }
}
