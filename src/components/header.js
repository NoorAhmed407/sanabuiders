import React, {Component} from 'react';
import logo from './../img/logo.jpg';
import './../styles/header.css';
import {BrowserRouter, Link} from 'react-router-dom'
class Header extends Component{

    state = {
        color: 'transparent'
      }
    
      listenScrollEvent = e => {
        if (window.scrollY > 50) {
          this.setState({color: 'primary'})
        } else {
          this.setState({color: 'transparent'})
        }
      }
    
      componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
      }

    render(){
        return(
            <div>
                <div className={`navbar navbar-expand-lg navbar-light fixed-top bg-${this.state.color}`}>
                    <div className="container">
                <Link className="navbar-brand" to="/">
                    <img 
                    alt="logo" src={logo}
                    />
                </Link>
                <button className="navbar-toggler bg-white" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/mission">Mission</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="history">History</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>         
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-success my-2 my-sm-0" type="submit">Search</button>
                     </form>
                    
                </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Header;