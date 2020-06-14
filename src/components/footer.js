import React, { Component } from 'react';
import {connect} from 'react-redux';


class Footer extends Component{

    getIcons = () =>{
        let geticon = this.props.datafooter.icons.map(item=>{
            return(
                <a 
                key = {item.id}
                href="#"
                className="p-2"
                >
                    <img 
                        src = {`https://img.icons8.com/fluent/40/000000/${item.name}.png`}
                        alt="icons"
                    />
                </a>
            );
        })
        return geticon;
    }
   
    render(){
        return(
            <div className="mt-n5 bg-primary">
                <div className="container">
                    <div className="row py-5 text-light">
                        <div className="col-md-6">
                            <p>CopyRight@ Sana Builders and Developers</p>
                        </div>
                        <div className="col-md-6">
                            <p className="float-right">
                                {this.getIcons()}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        datafooter: state.footerData
    }
}

export default connect(mapStateToProps)(Footer);