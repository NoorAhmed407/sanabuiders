import React, { Component } from 'react';
import {connect} from 'react-redux';
import AOS from 'aos'; 
import 'aos/dist/aos.css';


const TeamCard = (props) =>{
    AOS.init()
    const styles = {
        imgstyle: {
            width:"200px"
        }
    };
    return(
        <div 
        data-aos="zoom-in"
        className="col-md-4 text-center">
                <img 
                style={styles.imgstyle}
                 class="rounded-circle"
                 src={`https://joeschmoe.io/api/v1/${props.membername}`} 
                 alt="Generic placeholder image" 
                 />
                <h2>{props.membername}</h2>
                <p>{props.memberdesc} </p>
                <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
        </div>
    );
}

class OurTeam extends Component{
    render(){

        const getCards = (props) =>{
            const getcard = this.props.data.textData.map(item=>{
                return(
                    <TeamCard 
                        membername={item.name}
                        memberdesc={item.desc}
                        key={item.id}
                    />
                );
            });

            return getcard;
        }

        return(
            <div className="jumbotron">
                <div className="container text-center">
                    
                <h1 className="h1-responsive font-weight-bold">
                        Our amazing team
                    </h1>
                    <p className="grey-text w-responsive mx-auto mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                        error amet numquam iure provident voluptate esse quasi, veritatis
                        totam voluptas nostrum quisquam eum porro a pariatur veniam.
                    </p>
                <div className="row">
                    {getCards()}
                </div>
                 </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        data: state.ourTeamData
    }
}


export default connect(mapStateToProps) (OurTeam);