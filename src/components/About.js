import React, { Component } from 'react'
import Sectionhead from './sectionhead';
import AOS from 'aos'; 
import 'aos/dist/aos.css';
import { render } from '@testing-library/react';
import { connect } from 'react-redux';


AOS.init();


const Aboutbody = (props) =>{
    return(
        <div className="container py-5">
            <div class="row featurette">
                <div 
                class="col-md-7 d-flex align-items-center"
                data-aos="fade-left"
                data-aos-duration="1000"
                >
                    <div>
                        <p style={{fontSize:"17px"}}>
                        Since inception back in 1990, the idea is to strive to raise the standard of construction industry. The Brains behind the SANA BUILDERS & DEVELOPERS streamline a strong dedication and Professionalism of High Standard in their work and site environment.
                        <br /><br />
                        Member of ABAD (Association of Builders & Developers) under the title of “Mehtab Builders & Developers” and “Sana Corporation”.
                        <br /><br />
                        Licensed by B.C.A. (Sindh Building Control Authority) under the Title of “Mehtab Builders & Developers”
                        <br /><br />
                        Under the Title of M. R. Group of Companies, Four Sub-Companies (Sana Enterprises, Sana Corporation, Sana & Co., and Sana Associates) have been registered in B.R.
                        <br /><br />
                        We put main emphasis on immaculate planning for every project and offers practical and preferred ideas in housing. People at Sana Builders believes in creativity and innovation. Comprising a team of highly qualified, experienced and dedicated professionals, our experts continuously strive for building and development of the housing demands of maximum number of people.
                         </p>
                    </div>
                </div>
                <div 
                data-aos="fade-right"
                class="col-md-5">
                    <img 
                    src="https://images.unsplash.com/photo-1576845377089-10f9b86fcb4c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=500"
                    class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" />
                </div>
            </div>
        </div>

    );
}


const Projects = (props)=>{
    return(
        <div
        data-aos="zoom-in"
        className="col-md-3 p-2">
            <a href={props.redirectURL}>
            <div
             className="card"
             >
                <img
                 className="card-img-top"
                  src={props.imgUrl}
                  alt="Card cap" />
                <div className="card-body">
                    <p className="card-text text-center">
                      <h5>{props.cardText}</h5>                   
                    </p>
                </div>
            </div>
            </a>
        </div>
    );
}

 class About extends Component{

    getCardsForPreviousProjects = (props) =>{
        const getCard = this.props.data.previousProjects.map(item=> 
        
        <Projects
           key={item.id}
           imgUrl={item.imgURL}
           cardText={item.name}
           redirectURL={item.redirect}
             />);
        return getCard;
      }

      getCardsForCurrentProjects = (props) =>{
        const getCard = this.props.data.currentProjects.map(item=> 
        <Projects
           key={item.id}
           imgUrl={item.imgURL}
           cardText={item.name}
           redirectURL={item.redirect}
             />);
        return getCard;
      }

    render(){
        return(
            <div>
                <Sectionhead 
                imgtype="building,crains"
                heading="About Us" />
                <Aboutbody />
                <div className="jumbotron my-5">
                        <h1 className="text-center">Our Projects</h1>
                        <h3>Previous Projects</h3>
                        <div className="row mt-3">
                        {this.getCardsForPreviousProjects()}
                        </div>
                        <h3 className="my-3"> Current Projects</h3>
                        <div className="row">
                            {this.getCardsForCurrentProjects()}
                        </div>
                        
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        data: state.Projects
    }
}

export default connect(mapStateToProps)(About);