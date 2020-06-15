import React, { Component } from 'react';
import Sectionhead from './sectionhead';



class Contact extends Component{

    constructor(props){
        super(props);

        this.state={
            fullname: "",
            email: "",
            phone: "",
            message: ""
        };
    }


    handleChange = (event) =>{
        this.setState({[event.target.name]: event.target.value});
    }

    sendmsg =  (event) => {
            const st  = this.state;
        if(st.fullname && st.email && st.phone && st.phone && st.message !== ""
         ? alert(`Dear ${this.state.fullname} your message has been sent successfully`) 
         : alert("Please fill all required data fields") );
         
        event.preventDefault();
    }

    render(){
        return(
            <div>
            <Sectionhead heading="Contact US"/>
            <div className="container py-5">
                <form>
                    <div className=" mx-auto form-group mb-5 col-md-6">
                        <label>Fullname</label>
                        <input 
                        className="form-control"
                        name= "fullname"
                        onChange={this.handleChange}
                        type="text" 
                        value={this.state.fullname} /> <br/>


                        <label>Email</label>
                        <input 
                        className="form-control"
                        name="email"
                        type="email" 
                        onChange={this.handleChange}
                        value={this.state.Email} /> <br/>


                        <label>Phone</label>
                        <input 
                        className="form-control" 
                        onChange={this.handleChange}
                        name="phone"
                        type="text" 
                        value={this.state.Phone} /> <br/>


                        <label>Meassage</label>
                        <textarea 
                        className="form-control" 
                        name="message"
                        onChange={this.handleChange}
                        value={this.state.message} 
                        rows="5" />

                        <button
                         className="float-right btn btn-success btn-lg m-3"
                         onClick={this.sendmsg}>Send</button>
                    </div>
                </form>
            </div>
        </div>
        );
    }
}


export default Contact;