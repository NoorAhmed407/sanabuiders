import React, { Component } from 'react';
import AOS from 'aos'; 
import 'aos/dist/aos.css';


AOS.init();



export default class Sectionhead extends Component{
    render(){
        return(
            <div>
                <img
                data-aos="zoom-out" 
                src= {`https://source.unsplash.com/1600x500/?${this.props.imgtype}`}
                alt="Img"
                style={{width: "100%"}}
                />
                <h1 className="text-center mt-5">{this.props.heading}</h1>
                <hr />
            </div>
        );
    }
}