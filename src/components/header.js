import React, {Component} from 'react';
import logo from './../img/logo.jpg';
import './../styles/header.css';

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
                <a className="navbar-brand" href="#">
                    <img 
                    alt="logo" src={logo}
                    />
                </a>
                <button className="navbar-toggler bg-white" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Vision</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Mission</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">History</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
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