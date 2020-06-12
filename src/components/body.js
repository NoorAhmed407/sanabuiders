import React, { Component } from 'react';
import BIMG from './../img/bodyimg.jpg';
import {connect} from 'react-redux';  
import AOS from 'aos'; 
import 'aos/dist/aos.css';
import './../styles/body.css';

AOS.init();
class Body extends Component{
    
    givePara = () =>{
        let para = this.props.bodydata.para.map(item=> 
            {
                return (
                    <div>
                        {item}
                        <br/><br/>
                    </div>
                );
            }
            );
        return para;
    }
    
    render(){
        return(
            <div>
                <div className="container">
                     <h1 className="text-center mt-5">Who We Are</h1>
                    <div className="row m-5">
                        <div className="col-md-6">
                            <p 
                            data-aos="fade-down"
                            className="text-justify">
                                {this.givePara()}
                            </p>
                        </div>

                        <div className="col-md-6">
                            <img 
                            data-aos="fade-right"
                            className="img-fluid mx-auto mt-5"
                            src={this.props.bodydata.Img} alt="body" />
                        </div>

                    </div>
                </div>
          </div>
           
        );
    }
}

    const mapStateToProps = (state) =>{
        return {
            bodydata: state.bodyData
        }
    }

export default connect(mapStateToProps)(Body);