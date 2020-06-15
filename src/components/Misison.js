import React, { Component } from 'react'
import Sectionhead from './sectionhead';


class Mission extends Component{
    render(){
        return(
            <div>
                <Sectionhead  
                imgtype="civil-engineer,building"
                heading="Our Mission"/>
               <div className="container py-5">
                    <h4>
                     >> <b>SANA BUILDERS & DEVELOPERS</b> numbered among the leading state of the art comfort providers in Pakistan. Our principle mission is to offer integrated solutions for standard living & facilities. We prioritize sustainable business practice and take responsibility for our action.
                            <br />
                            <br />
                            <br />
                    >> We have successfully launched a number of prestigious residential and commercial projects in Pakistan. These projects carry a unique blend of elegance, style and comfort at the very nominal rates. We will continue to increase our execution capacity in response to record demands for our services.
                
                     </h4>
               </div>
            </div>
        );
    }
}

export  default Mission;